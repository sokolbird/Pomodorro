import React, { Component } from 'react';
import '../styles/buttons.css'

class Controls extends Component {
    render() {
        return (
            <div className="buttons">
                <button className="green-btn"
                        onClick={this.props.onStartClick}
                        disabled={this.props.isStarted}>
                    Start
                </button>
                <button className="red-btn"
                        disabled={!this.props.isStarted}
                        onClick={this.props.onStopClick}>
                    Pause
                </button>
                <button className="seagreen-btn"
                        onClick={this.props.onReset}>
                    Reset
                </button>
            </div>
        )
    }
    

}

export default Controls;