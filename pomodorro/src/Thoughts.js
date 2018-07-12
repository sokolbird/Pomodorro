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
            notes: []
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
                {this.state.onAdding ? <Textarea onBlur={this.handleBlur.bind(this)}/> : ""}
                <NotesList notesList={this.state.notes}/>
            </div>
        );
    }

    handleBlur = () => {
        this.setState(prevState => ({
            notes: [...prevState.notes, 'test'],
            onAdding: !this.state.onAdding
        }))
    };

    preventBlur = (e) => {
        e.preventDefault();
    };

    handleAdding = () => {
        this.setState({
            onAdding: !this.state.onAdding
        });
        console.log(this.state.onAdding)
    };
}

export default Thoughts;
