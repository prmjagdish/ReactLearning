
// useState with Object

import React, { useState } from "react";

function HookCounterThree(){

    const [name, setName] = useState({firstName:'',lastName:''}) // object

    return(
        <>
        
        <input type = 'text' onChange = { e => setName({...name,firstName:e.target.value})}/>

        <input type = 'text' onChange = { e => setName({...name,lastName:e.target.value})}/>

        <p>Your first name is : {name.firstName}</p>

        <p>Your first name is : {name.lastName}</p>

        </>    
    )
}

export default HookCounterThree