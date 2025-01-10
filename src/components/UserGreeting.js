import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    
  render() {

    //Short circuit operator

    return this.state.isLoggedIn && <div>Hello Jagdish</div>

    // ternary operator

    // return(
    //     this.state.isLoggedIn ?(
    //         <div>Hello Jagdish</div>
    //     ):(
    //         <div>Welcome Guest</div>
    //     )
    // )

    
    // element variables 

    // let message 
    // if (this.state.isLoggedIn){
    //     message = <div>Hello Jagdish</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>


    // if else

    // if (this.state.isLoggedIn) {
    //     return(

    //         <div>
    //             <h5>Conditional Reandering</h5>
    //             <div>Hello Jagdish</div>
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             <h5>Conditional Reandering</h5>
    //             <div>Welcome Guest</div>
    //         </div>
    //     )
    // }
  }
}

export default UserGreeting
