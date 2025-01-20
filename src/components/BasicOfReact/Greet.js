// This functional component

import React from "react";

// const Greet = (props) => {
//     return(
//         <div>
//             <h1>{props.name} also known as {props.nikename}</h1>
//         </div>
//     )
// }

// destructuring props

// first way 

// const Greet = ({name,nikename}) => {
//     return(
//         <div>
//             <h1>{name} also known as {nikename}</h1>
//         </div>
//     )
// }

// second way

const Greet = props => {
    const {name,nikename} = props
    return(
        <div>
            <h1>{name} also known as {nikename}</h1>
        </div>
    )
}

export default Greet;