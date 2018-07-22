import React, { Component } from 'react';
import '../styles/toggleSwitch.css'

class ToggleSwitch extends Component {
    render() {
        return (
            <label className="switch">
                <input type="checkbox"
                       checked={this.props.checked}
                       onChange={this.props.handleChange}/>
                <span className="slider"/>
            </label>
        )
    }
}

export default ToggleSwitch;