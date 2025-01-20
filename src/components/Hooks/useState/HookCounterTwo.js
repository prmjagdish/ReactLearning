
// useState with previous state

import React, { useState } from 'react'

function HookCounterTwo() {

    const intialCount = 0

    const [count, setCount] = useState(intialCount)

  return (
    <div>
        Count : {count}
        <button onClick={() => setCount(intialCount)}>Reset</button>
        <button onClick={ prevCounter => setCount(count + 1)}>Increment</button>  
        <button onClick={ prevCounter => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default HookCounterTwo
