// Event handling in class component

import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandeler(){
        console.log("Button clicked")
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandeler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
