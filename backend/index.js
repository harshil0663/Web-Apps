const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = 3001
// Middleware setup
app.use(cors())
app.use(express.json())

morgan.token('request-body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :request-body'))

// MongoDB connection
const url = `mongodb+srv://vatsalsupari:K4ubG6_4NKiZFYu@cluster0.ecral.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
    process.exit(1)
  })

// Person schema with validations
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3, // Ensure name is at least 3 characters long
    validate: {
      validator: (v) => v.length >= 3,
      message: 'Name must be at least 3 characters long'
    }
  },
  number: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        return /^\d{2,3}-\d{8}$/.test(v); 
      },
      message: 'Phone number must be in the format: XX-XXXXXXX or XXX-XXXXXXXX'
    }
  },
  id: {
    type: String,
    required: true,
  }
})

const Person = mongoose.model('Person', personSchema)

// Routes
app.get('/api/persons', async (req, res) => {
  try {
    const persons = await Person.find({});
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve persons from MongoDB' });
  }
})

app.get('/info', async (req, res) => {
  try {
    const numberOfPeople = await Person.countDocuments();
    const currentTime = new Date();
    res.send(`
      <p>Phonebook has info for ${numberOfPeople} people</p>
      <p>Request received at ${currentTime}</p>
      <a href="/api/persons">/api/persons</a>
    `)
  } catch (error) {
    res.status(500).json({ error: 'Failed to get number of people' })
  }
})

app.get('/api/persons/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const person = await Person.findById(id);
    if (person) {
      res.json(person);
    } else {
      res.status(404).send('Person not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Error finding person' });
  }
})

app.delete('/api/persons/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await Person.deleteOne({ _id: id });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting person' });
  }
})

app.post('/api/persons', async (req, res) => {
  const { name, number, id } = req.body

  if (!name || !number) {
    return res.status(400).json({ error: 'Name and number are required' })
  }

  try {
    const nameExists = await Person.findOne({ name })
    if (nameExists) {
      return res.status(409).json({ error: 'Name already exists in the phonebook' })
    }

    const person = new Person({
      name,
      number,
      id,
    })

    await person.save()
    res.json(person)
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message })
    }
    res.status(500).json({ error: 'Error adding person to MongoDB' })
  }
})

app.put('/api/persons/:id', async (req, res) => {
  const id = req.params.id
  const { name, number } = req.body

  if (!name || !number) {
    return res.status(400).json({ error: 'Name and number are required' })
  }

  try {
    const updatedPerson = await Person.findByIdAndUpdate(id, { name, number }, { new: true })
    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' })
    }
    res.json(updatedPerson)
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message })
    }
    res.status(500).json({ error: 'Error updating person' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
