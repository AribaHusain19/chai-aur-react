import { useState } from "react"


function App() {
 
  const [counter,setCounter]=useState(0);
  const incValue = ()=>{
    if(counter<20)
    setCounter(counter+1)
  }
  const decValue = () =>{
    if(counter>0)
    setCounter(counter-1)
  }
  return (
    <>
      <div >
            <h1>Chai Aur React</h1>
            <h2>Counter {counter}</h2>
            <button onClick={incValue}>Increase value</button>
            <br/>
            <br/>
            <button onClick={decValue}>Decrease value</button>
      </div>
     
    </>
  )
}

export default App
