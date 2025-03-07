import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Loader2 } from 'lucide-react';
const App = () => {

  const { data ,isLoading,refetch,error} = useQuery({
    queryKey : ['todos'],
    queryFn  : getTodos,
  })
  if(error){
    return <div>error</div>
    alert("error")
  }
console.log(data)

  return (
    <>
    <div>{isLoading ? <Loader2 className="h-4 w-4 animate-spin"/>:JSON.stringify(data.slice(0,10))}</div>
    <button onClick={()=>refetch()}>refresh</button>
    </>
  )
}

const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));  
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return data
}

export default App
