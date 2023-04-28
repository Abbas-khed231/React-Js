import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    handleCount = () => {
        const{count} = this.state;
        this.setState({count: count + 1});
    }

    handleReset = () => {
        this.setState({count: 0});
    }

    render() {
    const{count} = this.state;
    return (
      <>
        <h1>Counter</h1>
        <div>
            Count: {count}
        </div>
        <div>
            <button onClick={this.handleCount}>Click</button>
            <button onClick={this.handleReset}>Reset</button>

        </div>
      </>
    )
  }
}

export default Counter;
