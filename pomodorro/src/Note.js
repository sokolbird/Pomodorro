import React, { Component } from 'react';
import dots from './dots-horizontal.svg'

class Note extends Component {
    state = { menuOpened: false };

    render() {
        return (
            <div className="note-li">
                <div>{this.props.note}</div>
                <button className="dots" onClick={this.handleMenuOpen} onBlur={this.handleMenuBlur}>
                    <img src={dots} alt="menu" title="Open menu"/>
                    <div className={this.state.menuOpened && this.props.menuNotDisabled ? 'show-pop pop' : 'pop'}>
                        <div className="menu-item" onClick={this.props.removeNote}>Delete</div>
                        <div className="menu-item" onClick={this.props.editNote}>Edit</div>
                    </div>
                </button>
            </div>
        )
    }

    handleMenuOpen = () => {
        this.setState({
            menuOpened: !this.state.menuOpened
        })
    };

    handleMenuBlur = () => {
        this.setState({
            menuOpened: false
        })
    }
}

export default Note;