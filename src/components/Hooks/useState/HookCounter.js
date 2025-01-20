
// useState Hook

import React,{useState} from 'react'

function HookCounter() {

    // hooks are function that call them simply

    // Dont calls Hooks inside the loops, Conditional, or nested functions 

    // only call them within react functional component 

    const [count, setCount] = useState(10);

    /*
    
    When you call useState, it returns an array with two elements:

    The current state value: This is the value of the state variable.
    A function to update the state: This is a setter function that you can use to update the state.
    
    */

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count :{count}</button>
    </div>
  )
}

export default HookCounter
