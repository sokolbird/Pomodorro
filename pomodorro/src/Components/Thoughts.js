import React, { Component } from 'react';
import Textarea from './Textarea.js'
import NotesList from './NotesList.js'
import plus from '../Media/plus-box.svg'
import minus from '../Media/minus-box.svg'

class Thoughts extends Component {
    state = {
        onAdding: false,
        notes: [],
        noteAdded: '',
        onEditing: false,
        noteOnEditing: '',
        editingNoteId: 0
    };

    render() {
        return (
            <div className="thoughts">
                <h5 className="card-header">Notes</h5>
                <div className={this.state.onEditing ? "adding-note adding-disabled" : "adding-note"}
                     onClick={this.handleAdding}>

                    {this.state.onAdding ? 'Cancel' : 'Add a note...'}

                    <img src={this.state.onAdding ? minus : plus}
                         alt='icon' style={{float: 'right'}}/>
                </div>

                {this.state.onAdding ? <Textarea onSave={this.saveAdded.bind(this)}
                                                 onChange={this.handleChangeAdding.bind(this)}
                                                 value={this.state.noteAdded}/> : ""}

                {this.state.onEditing ? <Textarea onSave={this.saveEdited.bind(this)}
                                                  onChange={this.handleChangeEditing.bind(this)}
                                                  value={this.state.noteOnEditing}/> : ""}

                <NotesList notesList={this.state.notes}
                           removeNote={this.removeNote}
                           editNote={this.handleEditing}
                           menuNotDisabled={!this.state.onEditing && !this.state.onAdding}
                />
            </div>
        );
    }

    handleEditing = (id) => {
        if (!this.state.onAdding) {
            let notesCopy = this.state.notes.slice();
            this.setState({
                onEditing: !this.state.onEditing,
                noteOnEditing: notesCopy.splice(id, 1)[0],
                editingNoteId: id,
                notes: notesCopy
            })
        }
    };

    handleChangeEditing = (value) => {
        this.setState({
            noteOnEditing: value
        });
    };

    saveEdited = () => {
        if (this.state.noteOnEditing) {
            let notesCopy = this.state.notes.slice();
            notesCopy.splice(this.state.editingNoteId, 0, this.state.noteOnEditing);
            this.setState({
                notes: notesCopy
            })
        }

        this.setState({
            onEditing: !this.state.onEditing
        });
    };

    handleChangeAdding = (value) => {
        this.setState({
            noteAdded: value
        });
    };

    saveAdded = () => {
        if (this.state.noteAdded) {
            this.setState(prevState => ({
                notes: [...prevState.notes, this.state.noteAdded]
            }))
        }

        this.setState({
            onAdding: !this.state.onAdding
        })
    };

    handleAdding = () => {
        if (!this.state.onEditing) {
            this.setState({
                onAdding: !this.state.onAdding,
                noteAdded: ''
            });
        }
    };

    removeNote = (id) => {
        let notesCopy = this.state.notes.slice();
        notesCopy.splice(id, 1);
        this.setState({
            notes: notesCopy
        })
    };
}

export default Thoughts;
