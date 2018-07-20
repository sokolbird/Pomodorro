import React, { Component } from 'react';
import Menu from './Menu.js'
import Logo from './Logo.js'
import Main from './Main.js'
import PomodorosLeft from './PomodorosLeft.js'
import Thoughts from './Thoughts.js'
import { getPomodoro } from "../utils.js";

class App extends Component {
    state = {
        timerCount: 1,
        pomodoroList: [1]
    };

    incrementTimerCount = () => {
        this.setState({
            timerCount: this.state.timerCount + 1,
        });

        if (this.state.timerCount % 2 !== 0) {
            let pomodoroNumber = getPomodoro(this.state.timerCount);
            this.setState(prevState => ({
                pomodoroList: [...prevState.pomodoroList, pomodoroNumber]
            }))
        }
    };

    render() {
        return (
            <div>
                <input type="checkbox" id="nav-trigger" className="nav-trigger"/>
                <label htmlFor="nav-trigger" className="nav-trigger-label">
                    <span/>
                </label>
                <Menu/>
                <div className='wrap'>
                    <Logo/>
                    <Main timerCount={this.state.timerCount}
                          incrementTimerCount={this.incrementTimerCount.bind(this)}/>
                    <PomodorosLeft pomodoroList={this.state.pomodoroList}/>
                    <Thoughts/>
                </div>
            </div>
        );
    }
}

export default App;
