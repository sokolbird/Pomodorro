import React, { Component } from 'react';

class Controls extends Component {
    render() {
        return (
            <div className="buttons">
                <button className="start" id="button">Start</button>
                <button className="stop">Stop</button>
                <button className="reset">Reset</button>
            </div>
        )
    }
}

export default Controls;