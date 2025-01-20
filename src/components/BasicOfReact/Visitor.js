import React, { Component } from "react";

class Visitor extends Component{

    constructor(){
        super()
        this.state = {
            message : 'Welcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            message : 'Thank you'
        })        
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Visitor