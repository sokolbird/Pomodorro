import React, { Component } from 'react';

class Controls extends Component {
    render() {
        return (
            <div className="buttons">
                <button className="start" onClick={this.props.onStartClick} disabled={this.props.isStarted}>Start</button>
                <button className="stop" disabled={!this.props.isStarted}>Stop</button>
                <button className="reset">Reset</button>
            </div>
        )
    }
    

}

export default Controls;