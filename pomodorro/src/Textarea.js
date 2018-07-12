import React, { Component } from 'react';

class Textarea extends Component {
    render() {
        return (
            <div className="textarea-wrap">
                <textarea ref={(area) => { this.textarea = area; }}
                          placeholder="Write here a note"
                          onBlur={this.props.onBlur}/>
            </div>
        )
    }

    componentDidMount() {
        this.textarea.focus();
    }
}

export default Textarea;