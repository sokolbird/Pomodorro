import React, { Component } from 'react';

class NotesList extends Component {
    render() {
        const notesElements = this.props.notesList.map((note, index) =>
            <li key={index}>
                <pre style={{margin: '0', fontFamily: 'inherit'}}>{note}</pre>
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