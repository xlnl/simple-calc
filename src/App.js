import React, { Component } from 'react'
import './App.css';

class App extends Component {
  state = {
    num1: 0,
    num2: 0,
    result: 0
  }

  setNum = (e, num) => {
    this.setState({ [num]: e.target.value})
  }

  addNum = (e) => {
    var num1 = parseInt(this.state.num1)
    var num2 = parseInt(this.state.num2)
    this.setState({
      result: num1 + num2
    })
  }

  render () {
    return (
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
        <input type="number" name="num1" placeholder="Enter your first number" 
         value={this.state.num1} onChange={ (e) => this.setNum(e, 'num1')}
        />
        <span>+</span>
        <input type="number" name="num2" placeholder="Enter your second number" 
         value={this.state.num2} onChange={ (e) => this.setNum(e, 'num2')}
        />
        <button onClick={this.addNum}>=</button>
        <h3>Addition results go here!</h3>
        <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}

export default App;
