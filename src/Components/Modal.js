import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputMinutes from './InputMinutes.js'
import ToggleSwitch from './ToggleSwitch.js'
import '../styles/modal.css'
import '../styles/buttons.css'

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            autostart: this.props.autostart,
            bigBreakEnabled: this.props.bigBreakEnabled,
            workTime: this.props.workTime,
            smallBreak: this.props.smallBreak,
            bigBreak: this.props.bigBreak
        }
    }

    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal" id="modal">
                <div className="settings-block">
                    <h5 className="settings-header">Settings</h5>
                    <div className="settings-body">
                        <div className="setting">
                            <span>Timer auto start</span>
                            <ToggleSwitch className="setting-input"
                                          checked={this.state.autostart}
                                          handleChange={this.handleAutostartChange.bind(this)}
                            />
                        </div>
                        <div className="setting">
                            <span>Big break after every 4th pomodoro</span>
                            <ToggleSwitch className="setting-input"
                                          checked={this.state.bigBreakEnabled}
                                          handleChange={this.handleBreakSwitchChange.bind(this)}/>
                        </div>
                        <div className="setting">
                            <span>Time for work in minutes</span>
                            <InputMinutes name={'workTime'}
                                          currentTime={this.state.workTime}
                                          className="setting-input"
                                          onChange={this.inputChange.bind(this)}
                                          increment={this.increment.bind(this, 'workTime')}
                                          decrement={this.decrement.bind(this, 'workTime')}
                                          handleBlur={this.handleInputBlur.bind(this, 'workTime')}/>
                        </div>
                        <div className="setting">
                            <span>Time for small break in minutes</span>
                            <InputMinutes name={'smallBreak'}
                                          currentTime={this.state.smallBreak}
                                          className="setting-input"
                                          onChange={this.inputChange.bind(this)}
                                          increment={this.increment.bind(this, 'smallBreak')}
                                          decrement={this.decrement.bind(this, 'smallBreak')}
                                          handleBlur={this.handleInputBlur.bind(this, 'smallBreak')}/>
                        </div>

                        {this.state.bigBreakEnabled ?
                            <div className="setting">
                                <span>Time for big break in minutes</span>
                                <InputMinutes name={'bigBreak'}
                                              currentTime={this.state.bigBreak}
                                              className="setting-input"
                                              onChange={this.inputChange.bind(this)}
                                              increment={this.increment.bind(this, 'bigBreak')}
                                              decrement={this.decrement.bind(this, 'bigBreak')}
                                              handleBlur={this.handleInputBlur.bind(this, 'bigBreak')}/>
                            </div>
                        : ""}

                    </div>
                    <div className="settings-footer">
                        <button className="red-btn"
                                onClick={this.props.closeSettings}
                                id="cancel">
                            Cancel
                        </button>
                        <button className="green-btn"
                                onClick={this.handleApply}
                                id="apply">
                            Apply
                        </button>
                    </div>
                </div>
            </div>,
            this.root
        )
    }

    handleBreakSwitchChange = () => {
        this.setState({
            bigBreakEnabled: !this.state.bigBreakEnabled
        });
    };

    handleAutostartChange = () => {
        this.setState({
            autostart: !this.state.autostart
        });
    };

    inputChange = (e) => {
        const newValue = Math.abs(e.target.value);

        if (newValue) {
            if (newValue > 60 || newValue < 1) return;
        }

        this.setState({
            [e.target.getAttribute('name')]: parseInt(newValue, 10) || ""
        })
    };

    increment = (stateName) => {
        if (this.state[stateName] >= 60) return;

        this.setState({
            [stateName]: this.state[stateName] + 1
        })
    };

    decrement = (stateName) => {
        if (this.state[stateName] <= 1) return;

        this.setState({
            [stateName]: this.state[stateName] - 1
        })
    };

    handleInputBlur = (stateName) => {
        if (!this.state[stateName]) {
            this.setState({
                [stateName]: this.props[stateName]
            })
        }
    };

    handleApply = () => {
        let newTimers = {
            autostart: this.state.autostart,
            bigBreakEnabled: this.state.bigBreakEnabled,
            workTime: this.state.workTime,
            smallBreak: this.state.smallBreak,
            bigBreak: this.state.bigBreak
        };

        this.props.applySettings(newTimers);
    }
}

export default Modal;