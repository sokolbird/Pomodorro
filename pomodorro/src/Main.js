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
                <Controls onStartClick={this.handleStart.bind(this)}
                          isStarted={this.state.isStarted}
                          onReset={this.handleReset.bind(this)}
                          onStopClick={this.handleStop.bind(this)}/>
                <Timer isStarted={this.state.isStarted} tomatoClasses={this.state.tomatoClasses}/>
            </div>
        )
    }

    handleStart = () => {
        this.setState({
            isStarted: !this.state.isStarted,
            tomatoClasses: 'tomato tomato-spin'
        });
        setTimeout(() => {
            this.setState({
                tomatoClasses: 'tomato'
            });
        }, 700);
    };

    handleReset = () => {
        this.setState({
            isStarted: false
        })
    };

    handleStop = () => {
        this.setState({
            isStarted: false
        })
    }
}

export default Main;