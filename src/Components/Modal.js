import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputMinutes from './InputMinutes.js'
import '../styles/modal.css'
import '../styles/buttons.css'

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
                    <InputMinutes/>
                    <InputMinutes/>
                    <InputMinutes/>
                    <div className="settings-footer">
                        <button className="red-btn" onClick={this.props.closeSettings}>Cancel</button>
                        <button className="green-btn">Apply</button>
                    </div>
                </div>
            </div>,
            this.root
        )
    }
}

export default Modal;