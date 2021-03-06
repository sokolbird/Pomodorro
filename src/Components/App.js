import React, { Component } from 'react';
import Menu from './Menu.js'
import Logo from './Logo.js'
import Main from './Main.js'
import PomodorosLeft from './PomodorosLeft.js'
import Notes from './Notes.js'
import Modal from './Modal.js'

import { getPomodoro } from "../utils.js";

class App extends Component {
    constructor() {
        super();

        let settings = JSON.parse(localStorage.getItem("settings"));
        console.log(settings);
        if(settings) {
            this.state = {
                timerCount: 1,
                pomodoroList: [1],
                isSettingsOpen: false,
                bigBreakEnabled: settings.bigBreakEnabled,
                autostart: settings.autostart,
                workTime: settings.workTime,
                smallBreak: settings.smallBreak,
                bigBreak: settings.bigBreak
            }
        }
        else {
            this.state = {
                timerCount: 1,
                pomodoroList: [1],
                isSettingsOpen: false,
                bigBreakEnabled: true,
                autostart: false,
                workTime: 25,
                smallBreak: 5,
                bigBreak: 15
            };
        }
    }


    render() {
        return (
            <main>
                <input type="checkbox" id="nav-trigger" className="nav-trigger"
                       ref={(check) => { this.check = check; }}/>
                <label htmlFor="nav-trigger" className="nav-trigger-label" title="Menu">
                    <span/>
                </label>

                <Menu openSettings={this.toggleSettings.bind(this)}/>

                <div className="wrap" onClick={() => this.check.checked = false}>
                    <Logo/>
                    <Main timerCount={this.state.timerCount}
                          incrementTimerCount={this.incrementTimerCount.bind(this)}
                          workTime={this.state.workTime * 60}
                          smallBreak={this.state.smallBreak * 60}
                          bigBreak={this.state.bigBreak * 60}
                          bigBreakEnabled={this.state.bigBreakEnabled}
                          autostart={this.state.autostart} />
                    <PomodorosLeft pomodoroList={this.state.pomodoroList}/>
                    <Notes/>
                </div>

                <div>
                    {this.state.isSettingsOpen && <Modal closeSettings={this.toggleSettings.bind(this)}
                                                         applySettings={this.applySettings.bind(this)}
                                                         workTime={this.state.workTime}
                                                         smallBreak={this.state.smallBreak}
                                                         bigBreak={this.state.bigBreak}
                                                         bigBreakEnabled={this.state.bigBreakEnabled}
                                                         autostart={this.state.autostart}/>}
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

    toggleSettings = () => {
        this.setState({
            isSettingsOpen: !this.state.isSettingsOpen
        });
        this.check.checked = false;
    };

    applySettings = (newTimers) => {
        this.setState({
            autostart: newTimers.autostart,
            bigBreakEnabled: newTimers.bigBreakEnabled,
            workTime: newTimers.workTime,
            smallBreak: newTimers.smallBreak,
            bigBreak: newTimers.bigBreak
        });
        this.toggleSettings();
    }
}

export default App;
