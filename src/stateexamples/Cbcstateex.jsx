import React, { Component } from 'react'

export default class Cbcstateex extends Component {
    constructor(){
        super();
        this.state={
            name:"narukulla"
        };
    }
   changename=()=>{
      this.setState({name : "BHARATH SAI TEJA"});
    }
  render() {
    console.log(this);
    return (
      <div>Cbcstateex
      <h1>{this.state.name}</h1>
      <button onClick={this.changename}>change name</button>
      </div>
    )
  }
}
