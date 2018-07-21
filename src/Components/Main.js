import React, { Component } from 'react';
import Task from './Task.js'
import Controls from './Controls.js'
import Timer from './Timer.js'
import sound from '../Media/sound.wav'

class Main extends Component {
    constructor(props) {
        super(props);

        this.workTime = 25 * 60;
        this.smallBreak = 5 * 60;
        this.bigBreak = 15 * 60;

        this.timer = null;
        this.initialTime = this.workTime;

        this.state = {
            isStarted: false,
            tomatoClasses: 'tomato',
            remainingTimeSec: this.initialTime,
            isBreak: false
        };
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
                <audio id="sound" src={sound} preload="auto"/>
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
        clearInterval(this.timer);
        this.props.incrementTimerCount();
        document.getElementById("sound").play();

        this.setState({
            isStarted: false,
            tomatoClasses: 'tomato',
            isBreak: !this.state.isBreak,
        });
    };

    setNextTimer = () => {
        if (!this.state.isBreak) {
            this.setState({remainingTimeSec : this.workTime});
            this.initialTime = this.workTime;
        }

        if (this.props.timerCount % 8 === 0 && this.state.isBreak) {
            this.setState({remainingTimeSec: this.bigBreak});
            this.initialTime = this.bigBreak;
        }

        if (this.props.timerCount % 8 !== 0 && this.state.isBreak) {
            this.setState({remainingTimeSec : this.smallBreak});
            this.initialTime = this.smallBreak;
        }
    };

    handleReset = () => {
        clearInterval(this.timer);
        this.setState({
            isStarted: false,
            tomatoClasses: 'tomato',
            remainingTimeSec: this.initialTime
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