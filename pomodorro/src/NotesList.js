import React, { Component } from 'react';

class NotesList extends Component {
    render() {
        const notesElements = this.props.notesList.map(note =>
            <li>{note}</li>
        );

        return (
            <ul className="list">
                {notesElements}
            </ul>
        )
    }
}

export default NotesList;