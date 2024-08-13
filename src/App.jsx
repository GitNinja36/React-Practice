import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  // let counter = 15;
  let [counter , setCounter] = useState(15)


  const addValue = () =>{
    // console.log("clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1); 
  }

  const decValue = () =>{
    // console.log("clicked", counter);
    setCounter(counter-1);
  }

   
  return (
    
    <>
      <h1>hii there</h1>
      <h3>counter value : {counter}</h3>
      <button onClick={addValue}>add button</button>
      <button onClick={decValue}>dec button</button>
    </>
  )
}

export default App
