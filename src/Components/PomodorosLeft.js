import React, { Component } from 'react';
import '../styles/lists.css'

class PomodorosLeft extends Component {
    render() {
        const pomodoros = this.props.pomodoroList.map(pomodoroNumber =>
            <li key={pomodoroNumber}>Pomodoro #{pomodoroNumber}</li>
        );

        return (
            <div className="tomatoes-left">
                <h5 className="card-header">Pomodoros left</h5>
                <ul className="list pomodoro-list">
                    {pomodoros}
                </ul>
            </div>
        );
    }
}

export default PomodorosLeft;
