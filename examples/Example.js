import React from 'react';

import ReactSmartComponent from '../src/index'

class Example extends ReactSmartComponent {
  constructor(props) {
    super(props)
    this.state = { a: 0, b: 0 }
  }
  render() {
    return (<div>
      <p>The "a" button has been clicked {this.state.a} times.</p>
      <p>The "b" button has been clicked {this.state.b} times.</p>
      <button onClick={() => { this.setState({ a: this.state.a + 1}) }}>Increase a and re-render</button>
      <button onClick={() => { this.setState({ b: this.state.b + 1}) }}>Increase b and DON'T re-render</button>
    </div>)
  }
  getShouldComponentUpdateStateDefinition() {
    return { a: (a, b) => a !== b }
  }
}

export default Example;