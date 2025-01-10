// Binding Event Handlers

import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick (){
        this.setState({
            message : 'Button clicked'
        })

        console.log(this)
    }

    // handleClick = () => {
    //     this.setState({
    //         message : 'Button clicked'
    //     })

    //     console.log(this)
    // }
    
  render() {
    return (
      <div>
        {/* <button onClick={this.handleClick.bind(this)}>Click me</button> */}
        {/* <button onClick={() => this.handleClick()}>Click me</button> */}
        {/* <button onClick={this.handleClick}>Click me</button> */}
        <button onClick={this.handleClick}>Click me</button> 
      </div>
    )
  }
}

export default EventBind
