import React, { Component } from 'react';
import Logo from './Logo.js'
import Main from './Main.js'
import PomodorosLeft from './PomodorosLeft.js'
import Thoughts from './Thoughts.js'

class App extends Component {
    constructor() {
        super();

        this.state = {
            pomodoroCount: 1
        }
    }

    incrementCount = () => {
        this.setState({
            pomodoroCount: this.state.pomodoroCount + 1
        })
    };

    render() {
        return (
            <div className='wrap'>
                <Logo/>
                <Main pomodoroCount={this.state.pomodoroCount} incrementCount={this.incrementCount.bind(this)}/>
                <PomodorosLeft pomodoroCount={this.state.pomodoroCount}/>
                <Thoughts/>
            </div>
        );
    }
}

export default App;
