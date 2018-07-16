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
                <div className="adding-note" onClick={this.handleAdding}>
                    {this.state.onAdding ? 'Cancel' : 'Add a note...'}
                    <img src={!this.state.onAdding ? plus : minus} alt='icon' style={{float: 'right'}}/>
                </div>
                {this.state.onAdding ? <Textarea onSave={this.handleSave.bind(this)}
                                                 onChange={this.handleChange.bind(this)}
                                                 value={this.state.addingNote}/> : ""}
                <NotesList notesList={this.state.notes} removeNote={this.removeNote}/>
            </div>
        );
    }

    handleChange = (value) => {
        this.setState({
            addingNote: value
        });
    };

    handleSave = () => {
        if (this.state.addingNote) {
            this.setState(prevState => ({
                notes: [...prevState.notes, this.state.addingNote]
            }))
        }
        this.setState({
            onAdding: !this.state.onAdding
        })
    };

    handleAdding = () => {
        this.setState({
            onAdding: !this.state.onAdding,
            addingNote: ''
        });
    };

    removeNote = (id) => {
        let notesCopy = this.state.notes.slice();
        notesCopy.splice(id, 1);
        this.setState({
            notes: notesCopy
        })
    }
}

export default Thoughts;
