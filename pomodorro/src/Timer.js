import React, { Component } from 'react';
import tomato from './tomato.svg'
import { secToMin } from './utils.js'

class Timer extends Component {
    render() {
        let time = secToMin(this.props.remainingTimeSec);
        document.title = 'Pomodorro | ' + time;
        return (
            <div className={this.props.tomatoClasses}>
                <div className="timer">{time}</div>
                <img src={tomato} alt="timer"/>
            </div>
        )
    }
}

export default Timer;