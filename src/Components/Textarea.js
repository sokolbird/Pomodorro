import React, { Component } from 'react';
import save from '../Media/save.svg'
import '../styles/textarea.css'

class Textarea extends Component {
    render() {
        return (
            <div className="textarea-wrap">
                <textarea ref={(area) => { this.textarea = area; }}
                          placeholder="Write here a note"
                          onChange={this.onNoteChange}
                          value={this.props.value}/>
                <button className="save"
                        onClick={this.props.onSave}
                        id="save">
                    Save &nbsp;
                    <img src={save} alt="icon"/>
                </button>
            </div>
        )
    }

    componentDidMount() {
        this.textarea.focus();
    }

    onNoteChange = (e) => {
        this.props.onChange(e.target.value);
    };
}

export default Textarea;