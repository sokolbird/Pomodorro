import React, { Component } from 'react';
import Menu from './Menu.js'
import Logo from './Logo.js'
import Main from './Main.js'
import PomodorosLeft from './PomodorosLeft.js'
import Notes from './Notes.js'
import Modal from './Modal.js'

import { getPomodoro } from "../utils.js";

class App extends Component {
    state = {
        timerCount: 1,
        pomodoroList: [1],
        isSettingsOpen: false
    };

    render() {
        return (
            <main>
                <input type="checkbox" id="nav-trigger" className="nav-trigger"
                       ref={(check) => { this.check = check; }}/>
                <label htmlFor="nav-trigger" className="nav-trigger-label" title="Menu">
                    <span/>
                </label>

                <Menu openSettings={this.toggleSettings.bind(this)}/>

                <div className="wrap" onClick={this.handleMenuBlur}>
                    <Logo/>
                    <Main timerCount={this.state.timerCount}
                          incrementTimerCount={this.incrementTimerCount.bind(this)}/>
                    <PomodorosLeft pomodoroList={this.state.pomodoroList}/>
                    <Notes/>
                </div>

                <div>
                    {this.state.isSettingsOpen && <Modal closeSettings={this.toggleSettings.bind(this)}/>}
                </div>
            </main>
        );
    }

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

    handleMenuBlur = () => {
        this.check.checked = false;
    };

    toggleSettings = () => {
        this.setState({
            isSettingsOpen: !this.state.isSettingsOpen
        });
        this.check.checked = false;
    }
}

export default App;
