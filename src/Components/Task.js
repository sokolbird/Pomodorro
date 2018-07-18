import React, {Component} from 'react';

class Task extends Component {
    state = { task: '' };

    render() {
        return (
            <div className="task">
                <label htmlFor="task-name">Click on task to type or edit</label>
                <span ref={(span) => { this.taskName = span; }} tabIndex="0" onFocus={this.handleFocus}>
                    {this.state.task ? this.state.task : 'Enter your task'}
                </span>
                <input ref={(input) => { this.taskInput = input; }} type="text"
                       maxLength={15}
                       style={{display: 'none'}}
                       onBlur={this.handleBlur}
                       onKeyDown={this.handleEnter}/>
            </div>
        )
    }

    handleFocus = () => {
        this.taskInput.style = 'display: inline-block';
        this.taskName.style = 'display: none';
        this.taskInput.focus();
    };

    handleBlur = () => {
        this.taskInput.style = 'display: none';
        this.taskName.style = 'display: inline-block';
        this.setState({
            task: this.taskInput.value
        })
    };

    handleEnter = (e) => {
        if (e.keyCode === 13) this.taskInput.blur();
    }
}

export default Task;