import React, { Component } from 'react';
import Task from './Task.js'
import Controls from './Controls.js'
import Timer from './Timer.js'
import {sendNotification} from "../utils";
import sound from '../Media/sound.wav'

class Main extends Component {
    constructor(props) {
        super(props);
        this.timer = null;

        this.state = {
            initialTime: this.props.workTime,

            isStarted: false,
            tomatoClasses: 'tomato',
            remainingTimeSec: this.props.workTime,
            isBreak: false,
            workTime: this.props.workTime,
            smallBreak: this.props.smallBreak,
            bigBreak: this.props.bigBreak
        };
    }

    componentWillReceiveProps(nextProps) {
        document.getElementById("stop").click();
        this.setState((state, props) => {
            return {
                initialTime: nextProps.workTime,
                workTime: nextProps.workTime,
                smallBreak: nextProps.smallBreak,
                bigBreak: nextProps.bigBreak,
                remainingTimeSec: nextProps.workTime
            }
        });
        this.setNextTimer();
    }


    render() {
        return (
            <div className="main">
                <Task/>
                <Controls onStartClick = {this.handleStart.bind(this)}
                          isStarted    = {this.state.isStarted}
                          onReset      = {this.handleReset.bind(this)}
                          onStopClick  = {this.handleStop.bind(this)}/>

                <Timer isStarted        = {this.state.isStarted}
                       tomatoClasses    = {this.state.tomatoClasses}
                       remainingTimeSec = {this.state.remainingTimeSec}/>
                <audio src={sound} preload="auto" id="sound"/>
            </div>
        )
    }

    handleStart = () => {
        this.setState({
            isStarted: true,
            tomatoClasses: 'tomato tomato-spin'
        });

        this.timer = setInterval(() => {
            this.tick();
            if (this.state.remainingTimeSec <= 0) {
                this.endCurrentTimer();
                this.setNextTimer();
                if (this.props.autostart) this.startNextTimer();
            }
        }, 1000);
    };

    tick = () => {
        let remainingTimeSec = this.state.remainingTimeSec - 1;
        this.setState({
            remainingTimeSec: remainingTimeSec
        });
    };

    endCurrentTimer = () => {
        sendNotification(this.state.isBreak);
        clearInterval(this.timer);
        this.props.incrementTimerCount();

        this.setState({
            isStarted: false,
            tomatoClasses: 'tomato',
            isBreak: !this.state.isBreak,
        });
    };

    setNextTimer = () => {
        if (!this.state.isBreak) {
            this.setState((state, props) => {
                return {
                    remainingTimeSec : state.workTime,
                    initialTime: state.workTime
                }
            });
            return;
        }

        if (this.props.timerCount % 8 === 0 && this.props.bigBreakEnabled) {
            this.setState((state, props) => {
                return {
                    remainingTimeSec : state.bigBreak,
                    initialTime: state.bigBreak
                }
            });
            return;
        }

        if (this.props.timerCount % 8 !== 0) {
            this.setState((state, props) => {
                return {
                    remainingTimeSec : state.smallBreak,
                    initialTime: state.smallBreak
                }
            });
        }
    };

    startNextTimer = () => {
      document.getElementById("start").click();
    };

    handleReset = () => {
        clearInterval(this.timer);
        this.setState({
            isStarted: false,
            tomatoClasses: 'tomato',
            remainingTimeSec: this.state.initialTime
        })
    };

    handleStop = () => {
        clearInterval(this.timer);
        this.setState({
            isStarted: false
        })
    }
}

export default Main;