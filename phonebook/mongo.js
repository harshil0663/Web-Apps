
// import mongoose from "mongoose"

// if (process.argv.length < 3) {
//     console.log('give password as argument')
//     process.exit(1)
// }

// const password = process.argv[2]

// const url = `mongodb+srv://vatsalsupari:K4ubG6_4NKiZFYu@cluster0.ecral.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// // const url = `mongodb+srv://vatsalsupari:K4ubG6_4NKiZFYu@cluster0.a5qfl.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`
// mongoose.set('strictQuery',false)

// mongoose.connect(url)


// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// })

// const Note = mongoose.model('Note', noteSchema)

// // const note = new Note({
// //   content: 'css is easy',
// //   important: true,
// // })

// // note.save().then(result => {
// //   console.log('note saved!')
// //   mongoose.connection.close()
// // console.log("connection closed")
// // })


// Note.find({important:true}).then(result => {
//     result.forEach(note => {
//       console.log(note)
//     })
//     mongoose.connection.close()
//   })

import mongoose from 'mongoose';



const password = process.argv[2];

const url = `mongodb+srv://vatsalsupari:K4ubG6_4NKiZFYu@cluster0.ecral.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false);

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit if connection fails
  });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: String, 
});

const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 3) {
  // List all entries
  Person.find({})
    .then(persons => {
      console.log('phonebook:');
      persons.forEach(person => {
        console.log(`${person.name} ${person.number}`);
      });
      mongoose.connection.close();
    })
    .catch(error => {
        console.error("Error fetching persons:", error);
        mongoose.connection.close();
    });
} else if (process.argv.length >= 4) {
    // Add a new entry.  Handle up to 5 arguments
    if (process.argv.length > 5) {
        console.error("Too many arguments. Usage: node mongo.js <password> <name> <number>");
        mongoose.connection.close();
        process.exit(1);
    }

  const name = process.argv[3];
  const number = process.argv[4];


  // Find the maximum ID, or set to 0 if there are no entries
    Person.find({})
    .sort({ id: -1 }) // Sort in descending order
    .limit(1) // Limit to the first document (highest ID)
    .then(result => {
      let nextId = 1;
      if (result.length > 0) {
           // Convert string id to number for incrementing, then back to string
           nextId = parseInt(result[0].id, 10) + 1;
      }


      const person = new Person({
        name: name,
        number: number,
        id: String(nextId),
      });

      return person.save();  // Return the promise from save()
    })
    .then((savedPerson) => {
      console.log(`added ${savedPerson.name} number ${savedPerson.number} to phonebook`);
      mongoose.connection.close();
    })
    .catch(error => {
        console.error("Error saving person:", error);
        mongoose.connection.close();
    });

} else {
    console.log("Invalid arguments. Usage: node mongo.js <password> [<name> <number>]")
    mongoose.connection.close();
}