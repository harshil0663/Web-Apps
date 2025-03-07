// import { useState, useEffect} from 'react'
// import axios from 'axios'
// import Notes from './components/Notes'

// Ex:1 
// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)


// const hook=() => {
//     console.log('effect')
//     axios
//       .get('http://localhost:3001/notes')
//       .then(response => {
//         console.log('promise fulfilled')
//         setNotes(response.data)
//       })
//   }
//   console.log('render', notes.length, 'notes')
//   useEffect(hook, [])
//   // ...
// }
// useEffect(() => {
//   console.log('effect')

//   const eventHandler = response => {
//     console.log('promise fulfilled')
//     setNotes(response.data)
//   }

//   const promise = axios.get('http://localhost:3001/persons')
//   promise.then(eventHandler)
// }, [])}
// export default App


// Ex:2 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Notes'; // Assuming Note is a separate component for rendering notes
import noteService from './Services/Note';


const App = () => {
  // Initialize states
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  // Fetch notes from the server when the component mounts
  // useEffect(() => {
  //   // Make sure the URL is correct and the server is running at this endpoint
  //   axios
  //     .get('http://localhost:3001/notes')
  //     .then((response) => {
  //       setNotes(response.data); // Set notes if request is successful
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching notes:', error);
  //     });
  // }, []);

  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id === id ? response.data : note))
      })
  }

  // Handle adding a new note
  const addNote = (event) => {
    event.preventDefault();

    // Create the new note object
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: String(notes.length + 1),
    }
  
    
    // Send the new note to the server
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then((response) => {
        setNotes(notes.concat(response.data)); // Add new note to state
        setNewNote(''); // Reset the input after adding note
      })
      .catch((error) => {
        console.error('Error adding note:', error);
      });
  };
  

  // Handle input change
  const handleInputChange = (event) => {
    setNewNote(event.target.value);
  };

  // Return the JSX
  return (
    <div>
      <h2>Notes</h2>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleInputChange}
          placeholder="Enter new note"
        />
        <button type="submit">Add Note</button>
      </form>
      <h3>All Notes</h3>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))

        }
      </ul>
    </div>
  )
}

export default App;
