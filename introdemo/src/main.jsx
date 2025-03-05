
import ReactDOM from 'react-dom/client'

import App from './App'
// Ex:12
// let counter=1

// ReactDOM.createRoot(document.getElementById('root')).render(<App counter={counter}/>)
// Ex:13 
// let counter=1
// const root=ReactDOM.createRoot(document.getElementById('root'))

// const refresh = () =>{
//   root.render(
//     <App counter={counter}/>
//   )
  
// }
// setInterval( ()=>{
//   refresh()
//   counter+=1
// },1000)

// Ex:14 
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// Ex:28
const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      important: true
    }
  ]
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>)