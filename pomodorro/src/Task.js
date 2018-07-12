import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="task">
                <label htmlFor="task-name">Click on task to type or edit</label>
                <span id="task-name-text" tabIndex="0">Enter your task</span>
                <input id="task-name" type="text" style={{display: 'none'}}/>
            </div>
        )
    }
}

export default Task;