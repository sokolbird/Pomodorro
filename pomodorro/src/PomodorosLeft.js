import React, { Component } from 'react';

class PomodorosLeft extends Component {
    render() {
        return (
            <div className="tomatoes-left">
                <h5 className="card-header">Pomodoros left</h5>
                <ul className="list">
                    <li>Pomodoro #1</li>
                    <li>Pomodoro #2</li>
                    <li>Pomodoro #3</li>
                    <li>Pomodoro #4</li>
                    <li>Pomodoro #5</li>
                </ul>
            </div>
        );
    }
}

export default PomodorosLeft;
