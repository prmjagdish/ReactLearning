// This class component

import React, { Component } from "react";

// class Welcome extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello {this.props.name} aslo know as {this.props.nikename}</h1>
//             </div>
//         )
//     }
// }

class Welcome extends Component{
    
    render(){
        const {name,nikename} = this.props
        return(
            <div>
                <h1>Hello {name} aslo know as {nikename}</h1>
            </div>
        )
    }
}

export default Welcome;