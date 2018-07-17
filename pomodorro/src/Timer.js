import React, { Component } from 'react';
import tomato from './tomato.svg'
import { secToMin } from './utils.js'

class Timer extends Component {
    render() {
        return (
            <div className={this.props.tomatoClasses}>
                <div className="timer">{secToMin(this.props.remainingTimeSec)}</div>
                <img src={tomato} alt="timer"/>
            </div>
        )
    }
}

export default Timer;