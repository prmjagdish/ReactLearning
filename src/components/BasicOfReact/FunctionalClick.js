// Event handling in functional component

import React from 'react'

function FunctionalClick() {

    function clickHandler(){
        console.log("Button clicked")
    }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      {/* <button onClick={clickHandler()}>Click</button>  this is function call event handeler is a function not a functional call*/}  
    </div>
  )
}

export default FunctionalClick
