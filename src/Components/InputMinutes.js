import React, { Component } from 'react';
import '../styles/inputMinutes.css'

class InputMinutes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.currentTime
        }
    }

    render() {
        return (
            <div className={this.props.disabled ? "input-number disabled" : "input-number"}>
                <div className="minus"
                     onClick={this.decrement}>&minus;</div>
                <input type="number"
                       name={this.props.name}
                       value={this.props.currentTime}
                       onChange={this.props.onChange}
                       onBlur={this.props.handleBlur}
                       disabled={this.props.disabled}/>
                <div className="plus" onClick={this.increment}>+</div>
            </div>
        )
    }

    decrement = () => {
        if (!this.props.disabled) this.props.decrement();
    };

    increment = () => {
        if (!this.props.disabled) this.props.increment();
    }
}

export default InputMinutes;