import React, { PureComponent } from 'react';
import Note from './Note.js'

class NotesList extends PureComponent {
    render() {
        const notesElements = this.props.notesList.map((note, index) =>
            <li key={index}>
                <Note note={note} removeNote={() => this.props.removeNote(index)}/>
            </li>
        ).reverse();

        return (
            <ul className="list">
                {notesElements}
            </ul>
        )
    }
}

export default NotesList;