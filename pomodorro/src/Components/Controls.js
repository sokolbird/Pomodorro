import React, { Component } from 'react';

class Controls extends Component {
    render() {
        return (
            <div className="buttons">
                <button className="start" onClick={this.props.onStartClick} disabled={this.props.isStarted}>Start</button>
                <button className="stop" disabled={!this.props.isStarted} onClick={this.props.onStopClick}>Pause</button>
                <button className="reset" onClick={this.props.onReset}>Reset</button>
            </div>
        )
    }
    

}

export default Controls;