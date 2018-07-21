import React, { Component } from 'react';
import '../styles/inputMinutes.css'

class InputMinutes extends Component {
    state = {
        value: 25
    };

    render() {
        return (
            <div className="input-number">
                <div className="minus">-</div>
                <input type="number" value={this.state.value}/>
                <div className="plus">+</div>
            </div>
        )
    }
}

export default InputMinutes;