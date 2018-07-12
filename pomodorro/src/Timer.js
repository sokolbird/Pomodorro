import React, { Component } from 'react';
import tomato from './tomato.svg'

class Timer extends Component {
    render() {
        return (
            <div className="tomato">
                <div className="timer">25:00</div>
                <img src={tomato} alt="timer"/>
            </div>
        )
    }
}

export default Timer;