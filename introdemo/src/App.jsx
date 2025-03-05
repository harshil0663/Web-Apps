// import React, { useState } from 'react'

// Ex:1 
// const App = () => {
//   console.log('Hello from component')
//   return (
//     <div>
//       <>Hello world</>
//     </div>
//   )
// }

// export default App

// Ex:2 
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log(now, a+b)

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }
// export default App

// Ex:3 
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     )
//   )
// }
// export default App;

// Ex:4
// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   )
// }
// export default App

// Ex:5 
// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name}</p>
//     </div>
//   )
// }
// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='George' />
//       <Hello name='Daisy' />
//     </div>
//   )
// }
// export default App

// Ex:6 
// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }
// export default App

// Ex:7 
// const Footer = () => {
//   return (
//     <div>
//       greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
//     </div>
//   )
// }
// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }
// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </>
//   )
// }
// export default App

// Ex:8 
// const App = () => {
//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },
//   ]

//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//     </div>
//   )
// }

// export default App

// Ex:9 
// const App = () => {
//   const friends = [ 'Peter', 'Maya']

//   return (
//     <div>
//       <p>{friends}</p>
//     </div>
//   )
// }

// Ex:10 
// const Hello = (props) => {

//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>

//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () =>{
//   return(
//     <Hello name='Harshil' age={22} />
//   )
// }
// export default App

// Ex: 11 
// const Hello = (props) => {

//   const name = props.name
//   const age = props.age


//   const bornYear = () => new Date().getFullYear() - age

//   console.log("hello app called")
//   return (

//     <div>

//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }


// const App = () => {
//   console.log("this is main app")
//   return (
    
//     <div>
//       <Hello name={'harshil'} age={22}/>
//     </div>
//   )
// }

// export default App

// Ex:12 
// const App = (props) => {
//   const {counter} = props
//   console.log("Page re-rendering")
//   return (
//     <div>{counter}</div>
//   )
// }

// export default App

// Ex:13 
// const App = (props) => {
//   const {counter}=props
//   console.log("Page re-rendering")
//   return (
//     <div>
//       {counter}
//     </div>
//   )
// }

// export default App

// Ex:14 

// import { useState } from 'react'
// const App = () => {
  // const [count,setcount]=useState(0)

  // setTimeout( ()=>{
    // setcount(count+1)
  // },1000)
  // console.log("rendering count...",count)
  // return (
    // <>
    // <div>{count}</div>
    // </>
  // )
    // 
// }
// 
// export default App

// Ex:15

// import { useState } from 'react'
// const App = () => {
//   const [counter,setcounter]=useState(0)

 

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={()=>{console.log("clicled")}}>
//         plus
//       </button>
//     </div>
//   )
// }

// export default App

// Ex:16 

// import { useState } from 'react'

// const App = () => {
//   const [counter,setcounter]=useState(0)


//   return (

//     <div>
//       <div>{counter}</div>
//       <button onClick={()=>{setcounter(counter+1)}}>plus</button>    
//       <button onClick={()=>{setcounter(counter-1)}}>Minus</button>    
//       <button onClick={()=>{setcounter(0)}}>zero</button>    
//     </div>
//   )
// }

// export default App

// Ex:17 
// import { useState } from "react"
// const App = () => {
//   const [counter, setCounter] = useState(0)

//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => {

//     console.log('increasing, value before', counter)
//     setCounter(counter + 1)
//   }

//   const decreaseByOne = () => { 

//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {

//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }
//   const Display = (props) => {
//     return (
//       <div>{props.counter}</div>
//     )
//   }
//   const Button = (props) => {
//     return (
//       <button onClick={props.onClick}>
//         {props.text}
//       </button>
//     )
//   }
//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setToZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   )
// } 
// export default App

// Ex:18 
// import { useState } from 'react'
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>
//         left
//       </button>
//       <button onClick={() => setRight(right + 1)}>
//         right
//       </button>
//       {right}
//     </div>
//   )
// }
// export default App

// Ex:19 
// import { useState } from 'react'
// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => {
//     const newClicks = { 
//       left: clicks.left + 1, 
//       right: clicks.right 
//     }
//     setClicks(newClicks)
//   }

//   const handleRightClick = () => {
//     const newClicks = { 
//       left: clicks.left, 
//       right: clicks.right + 1 
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }
// export default App

// Ex:20 

// import { useState } from 'react'
// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => {
//     const newClicks = { 
//       left: clicks.left + 1, 
//       right: clicks.right 
//     }
//     setClicks(newClicks)
//   }

//   const handleRightClick = () => {
//     const newClicks = { 
//       left: clicks.left, 
//       right: clicks.right + 1 
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }
// export default App

// Ex:21
// import { useState } from 'react'
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   const [allClicks, setAll] = useState([])


//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }


//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}

//       <p>{allClicks.join('  ')}</p>
//     </div>
//   )
// }
// export default App

//Ex:22
// import { useState } from 'react'
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)

//     setTotal(left + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)

//     setTotal(left + right)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>

//       <p>total {total}</p>
//     </div>
//   )
// }
// export default App

// Ex:23 
// import { useState } from 'react'
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }


// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}

//       <Button onClick={handleLeftClick} text='left' />
//       <Button onClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }
// export default App

//Ex:24
// import { useState } from 'react'
// const App = () => {
//   const [value, setValue] = useState(10)


//   const hello = (who) => {
//     const handler = () => {
//       console.log('hello', who)
//     }
//     return handler
//   }

//   return (
//     <div>
//       {value}
//       <br/>
//       <button onClick={hello('world')}>button</button>
//       <button onClick={hello('react')}>button</button>
//       <button onClick={hello('function')}>button</button>
//     </div>
//   )
// }
// export default App

//Ex:25

// import { useState } from 'react'
// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={() => setToValue(1000)}>
//         thousand
//       </button>
//       <button onClick={() => setToValue(0)}>
//         reset
//       </button>
//       <button onClick={() => setToValue(value + 1)}>
//         increment
//       </button>
//     </div>
//   )
// }
// export default App

//Ex:26

// import { useState } from 'react'
// const Display = props => <div>{props.value}</div>

// const Button = (props) => (
//   <button onClick={props.onClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = newValue => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   return (
//     <div>
//       <Display value={value} />
//       <Button onClick={() => setToValue(1000)} text="thousand" />
//       <Button onClick={() => setToValue(0)} text="reset" />
//       <Button onClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }
// export default App

// Ex:27 

// import React, { useState } from 'react';

// // Button Component
// const Button = ({ onClick, text }) => {
//   return <button onClick={onClick}>{text}</button>;
// };

// // StatisticLine Component
// const StatisticLine = ({ text, value }) => {
//   return (
//     <tr>
//       <td>{text}</td>
//       <td>{value}</td>
//     </tr>
//   );
// };

// // Statistics Component
// const Statistics = ({ good, neutral, bad }) => {
//   const total = good + neutral + bad;
//   const average = total === 0 ? 0 : (good - bad) / total;
//   const positive = total === 0 ? 0 : (good / total) * 100;

//   if (total === 0) {
//     return <p>No feedback given</p>;
//   }

//   return (
//     <div>
//       <h2>Statistics</h2>
//       <table>
//         <tbody>
//           <StatisticLine text="Good" value={good} />
//           <StatisticLine text="Neutral" value={neutral} />
//           <StatisticLine text="Bad" value={bad} />
//           <StatisticLine text="Total" value={total} />
//           <StatisticLine text="Average" value={average} />
//           <StatisticLine text="Positive feedback" value={positive + '%'} />
//         </tbody>
//       </table>
//     </div>
//   );
// };

// App Component
// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   console.log('object', good, neutral, bad);
//   return (
//     <div>
//       <h1>Give Feedback</h1>
   
//       <Button onClick={() => setGood(good + 1)} text="Good" />
//       <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
//       <Button onClick={() => setBad(bad + 1)} text="Bad" />

//       {good + neutral + bad > 0 && (
//         <Statistics good={good} neutral={neutral} bad={bad} />
//       )}
//     </div>
//   );
// }

// export default App;

//Ex:28
// import React, { useState } from 'react'
// const App = (props) => {
//   const {notes}=props
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         <li>{notes[0].content}</li>
//         <li>{notes[1].content}</li>
//         <li>{notes[2].content}</li>
//       </ul>
//     </div>
//   )
// }
// export default App

//Ex:29
// import { useState } from "react";
// import Note from "./components/Note";
// const App = (props) => {
//   const { notes } = props

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//     </div>
//  )
// }
// export default App

// Ex:30
// import { useState } from 'react'
import Note from './components/Note'


// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App 
// Ex:31
// import { useState } from "react"
// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)


//   const addNote = (event) => {
//     event.preventDefault()
//     console.log('button clicked', event.target)
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//       </ul>

//       <form onSubmit={addNote}>
//         <input />
//         <button type="submit">save</button>
//       </form>   
//     </div>
//   )
// }
// export default App

// Ex:32
// import { useState } from 'react'
// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState(
//     'a new note...'
//   ) 
//   const addNote = (event) => {
//     event.preventDefault()
//     console.log('button clicked', event.target)
//   }
//   // ...


//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input
//           value={newNote}

//           onChange={handleNoteChange}
//         />
//         <button type="submit">save</button>
//       </form>   
//     </div>
//   )
// }
// export default App

// Ex:33
// import { useState } from 'react'
// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [showAll, setShowAll] = useState(true)

//   const [newNote, setNewNote] = useState(
//     'a new note...'
//   )

//   const notesToShow = showAll
//   ? notes
//   : notes.filter(note => note.important === true)


//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() < 0.5,
//       id: String(notes.length + 1),
//     }
  
//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }
//   // ...


//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
       
//         {notes.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input
//           value={newNote}

//           onChange={handleNoteChange}
//         />
//         <button type="submit">save</button>
//       </form>   
//     </div>
//   )
// }
// export default App

// Ex:34
// import React, { useState } from 'react'

// const App = () => {
//   // State to keep track of the persons (initially with one person)
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
  
//   // State to control the input field for the new name
//   const [newName, setNewName] = useState('')

//   // Handler to update newName state when input changes
//   const handleNameChange = (event) => {
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }

//   // Handler for form submission
//   const handleFormSubmit = (event) => {
//     event.preventDefault() // Prevent the default form submission behavior
    
//     // Add new name to the persons array
//     const personObject = { name: newName }

//     // Update the state to include the new person
//     setPersons(persons.concat(personObject))
//     console.log('persons array:', persons)

//     // Clear the input field after submission
//     setNewName('')
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
      
//       {/* Form to add a name */}
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           name: 
//           <input 
//             value={newName}
//             onChange={handleNameChange} 
//           />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>

//       <h2>Numbers</h2>
//       {/* List the persons in the phonebook */}
//       <ul>
//         {persons.map((person, index) => (
//           <li key={index}>{person.name}</li>
//         ))}
//       </ul>

//       {/* Debugging output to display the newName */}
//       <div>debug: {newName}</div>
//     </div>
//   )
// }

// export default App


//Ex:35 form 
import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456789' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (setter) => (event) => setter(event.target.value)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({ name: newName, number: newNumber }))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with: 
        <input value={searchTerm} onChange={handleInputChange(setSearchTerm)} />
      </div>

      <h3>Add a new</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: 
          <input value={newName} onChange={handleInputChange(setNewName)} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleInputChange(setNewNumber)} />
        </div>
        <button type="submit">add</button>
      </form>

      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, index) => (
          <li key={index}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App


