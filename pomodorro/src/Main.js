import React, { Component } from 'react';
import Task from './Task.js'
import Controls from './Controls.js'
import Timer from './Timer.js'

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Task/>
                <Controls/>
                <Timer/>
            </div>
        )
    }
}

export default Main;