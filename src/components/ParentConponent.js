import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentConponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Parent'
      }

      this.geetParent = this.geetParent.bind(this)
    }

    geetParent(ChildName){
        alert(`Hello ${this.state.parentName} from ${ChildName}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.geetParent}/>
        {/* pass parameters  in the method */}
      </div>
    )
  }
}

export default ParentConponent
