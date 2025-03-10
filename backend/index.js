const express = require('express');
const morgan = require('morgan'); 
const app = express();
const PORT = 3001;

app.use(express.json());


morgan.token('request-body', (req, res) => {
    return JSON.stringify(req.body);
});


app.use(morgan(':method :url :status :res[content-length] - :response-time ms :request-body')); 


let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];


app.get('/api/persons', (req, res) => {
    res.json(persons);
});


app.get('/info', (req, res) => {
    const numberOfPeople = persons.length;
    const currentTime = new Date();
    res.send(`
        <p>Phonebook has info for ${numberOfPeople} people</p>
        <p>Request received at ${currentTime}</p>
    `);
});


app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const person = persons.find(person => person.id === id);

    if (person) {
        res.json(person);
    } else {
        res.status(404).send('Person not found');
    }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    persons = persons.filter(person => person.id !== id);
    res.status(204).end();
});


app.post('/api/persons', (req, res) => {
    if (!req.body.name || !req.body.number) {
        return res.status(400).json({ error: 'Name and number are required' });
    }

    const nameExists = persons.some(person => person.name === req.body.name);
    if (nameExists) {
        return res.status(409).json({ error: 'Name already exists in the phonebook' });
    }

    const id = String(Math.floor(Math.random() * 1000));
    const person = {
        id: id,
        name: req.body.name,
        number: req.body.number
    };

    persons = persons.concat(person);
    res.json(person);
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}/api/persons`);
});