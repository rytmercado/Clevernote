import React from "react";
import Notes from "./notes";
// import Notes from "./notes";

export default class NotesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getNotes();
    }

    render() {
        return(

        <div className="notes-index">
            <header className="notes-header">
                <h1>Notes</h1>
            </header>
            <ul>
                {this.props.notes.map(note => <li className="note-index-item">{note.title}</li>)}
            </ul>
        </div>
        )
    }
}