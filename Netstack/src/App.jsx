import { useQuery } from '@tanstack/react-query';
import React from 'react';
const path="./assets/loading.svg?react";
const App = () => {

  const { data ,isFetching,refetch,error} = useQuery({
    queryKey : ['todos'],
    queryFn  : getTodos,
  })
  if(error){
    return <div>error</div>
    alert("error")
  }


  return (
    <>
    <div>{isFetching ? <img src={path} alt="loading..." />:JsON.stringify(data)}</div>
    <button onClick={()=>refetch()}>refresh</button>
    </>
  )
}

const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 10000));  
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return data
}

export default App
