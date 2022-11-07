import React, { Component } from 'react'

export default class counter extends Component {
  
  render() {
    return (
      <div>
      <h1>This Button is clicked -- {this.props.dataa}-- times.</h1>
        
      </div>
    )
  }
}
