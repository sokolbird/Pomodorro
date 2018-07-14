import React, { Component } from 'react';
import Textarea from './Textarea.js'
import NotesList from './NotesList.js'
import plus from './plus-box.svg'
import minus from './minus-box.svg'

class Thoughts extends Component {
    constructor() {
        super();
        this.state = {
            onAdding: false,
            notes: [],
            addingNote: ''
        }
    }

    render() {
        return (
            <div className="thoughts">
                <h5 className="card-header">Notes</h5>
                <div className="adding-note" onClick={this.handleAdding} onMouseDown={this.preventBlur}>
                    {this.state.onAdding ? 'Cancel' : 'Add a note...'}
                    <img src={!this.state.onAdding ? plus : minus} alt='icon' style={{float: 'right'}}/>
                </div>
                {this.state.onAdding ? <Textarea onSave={this.handleSave.bind(this)}
                                                 onChange={this.handleChange.bind(this)}
                                                 value={this.state.addingNote}/> : ""}
                <NotesList notesList={this.state.notes}/>
            </div>
        );
    }

    handleChange = (value) => {
        this.setState({
            addingNote: value
        });
    };

    handleSave = () => {
            this.setState(prevState => ({
                onAdding: !this.state.onAdding,
                notes: this.state.addingNote ? [...prevState.notes, this.state.addingNote] : [...prevState.notes]
            }))
    };

    preventBlur = (e) => {
        e.preventDefault();
    };

    handleAdding = () => {
        this.setState({
            onAdding: !this.state.onAdding,
            addingNote: ''
        });
    };
}

export default Thoughts;
