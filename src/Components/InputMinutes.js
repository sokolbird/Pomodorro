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
            <div className="input-number">
                <div className="minus" onClick={this.props.decrement}>-</div>
                <input type="number"
                       name={this.props.name}
                       value={this.props.currentTime}
                       onChange={this.props.onChange}
                       onBlur={this.props.handleBlur}/>
                <div className="plus" onClick={this.props.increment}>+</div>
            </div>
        )
    }
}

export default InputMinutes;