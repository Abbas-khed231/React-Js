import React, { Component } from 'react'

class Toggle extends Component {
    constructor(){
        super()
        this.state = {
            bulb: false,
            fan: false
        }
    }

    bulbToggle = () => {
        const{bulb} = this.state;
        this.setState({bulb: !bulb})
    }

    fanToggle = () => {
        const{fan} = this.state;
        this.setState({fan: !fan})
    }

  render() {
    const { bulb, fan } = this.state;
    return (
      <>
        <div>Toggle</div>
        <div>
            bulb: {bulb ? 'On' : 'Off'}
        </div>
        <div>
            Fan: {fan ? 'On' : 'Off'}    
        </div>
        <div>
            <button onClick={this.bulbToggle}>Click {bulb ? 'Off' : 'On'} Bulb</button>
            <button onClick={this.fanToggle}>Click {fan ? 'Off' : 'On'} Fan</button>

        </div>

      </>
    )
  }
}

export default Toggle;
