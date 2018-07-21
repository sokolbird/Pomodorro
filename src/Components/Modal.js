import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal">
                <div className="settings-block">
                    <h5 className="settings-header">Settings</h5>
                    <div className="settings-footer">
                        <button className="stop" onClick={this.props.closeSettings}>Cancel</button>
                        <button className="start">Apply</button>
                    </div>
                </div>
            </div>,
            this.root
        )
    }
}

export default Modal;