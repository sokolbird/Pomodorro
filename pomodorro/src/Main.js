import React, { Component } from 'react';
import Task from './Task.js'
import Controls from './Controls.js'
import Timer from './Timer.js'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            isStarted: false,
            tomatoClasses: 'tomato'
        };
    }

    render() {
        return (
            <div className="main">
                <Task/>
                <Controls onStartClick={this.handleStart.bind(this)} isStarted={this.state.isStarted}/>
                <Timer isStarted={this.state.isStarted} tomatoClasses={this.state.tomatoClasses}/>
            </div>
        )
    }

    handleStart = (isStarted, tomatoClasses) => {
        this.setState({
            isStarted: !this.state.isStarted,
            tomatoClasses: 'tomato tomato-spin'
        });
        setTimeout(() => {
            this.setState({
                tomatoClasses: 'tomato'
            });
        }, 700);
    }
}

export default Main;