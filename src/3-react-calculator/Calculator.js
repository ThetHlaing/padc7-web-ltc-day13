import React, { Component } from 'react'
import update from 'immutability-helper'
import math from 'mathjs'
import './App.css'
import Display from './Display'
import Button from './Button'

class Calculator extends Component {
  constructor() {
    super()
    this.state = { operations: [] }
  }

  calculateOperations = () => {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      result = String(result)
      //add result array into operations state
      this.setState({
        operations : [result]
      })
    }
  }
  handleClick = e => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        //Clear the state
        break
      case 'equal':
        //Calculate the application
        this.calculateOperations();
        break
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        })
        
        this.setState({
          operations: newOperations,
        })
        break
    }
  }
  render() {
    //Add 9,6,3 and multiplier "x" buttons
    return (
      <div className="App">
        <Display data={this.state.operations} />
        <div className="Buttons">
          <Button onClick={this.handleClick} label="C" value="clear" />
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="0" value="0" />

          <Button onClick={this.handleClick} label="/" value="/" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="." value="." />      
        
          <Button label="" value="null" />

          <Button onClick={this.handleClick} label="-" value="-" />
          <Button onClick={this.handleClick} label="+" size="2" value="+" />
          <Button onClick={this.handleClick} label="=" size="2" value="equal" />
        </div>
      </div>
    )
  }
}

export default Calculator
