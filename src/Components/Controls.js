import React, { Component } from 'react';
import '../styles/buttons.css'

class Controls extends Component {
    render() {
        return (
            <div className="buttons">
                <button className="green-btn"
                        onClick={this.props.onStartClick}
                        disabled={this.props.isStarted}
                        id="start">
                    Start
                </button>
                <button className="red-btn"
                        disabled={!this.props.isStarted}
                        onClick={this.props.onStopClick}
                        id="stop">
                    Pause
                </button>
                <button className="seagreen-btn"
                        onClick={this.props.onReset}
                        id="reset">
                    Reset
                </button>
            </div>
        )
    }
    

}

export default Controls;