import React from "react";
import { Link } from "react-router-dom";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import Notes from "./notes";
// import Notes from "./notes";


export default class NotesIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.makeNewNote = this.makeNewNote.bind(this)
    }

    componentDidMount(){
        this.props.getNotes()
        .then((res) => {this.setState(this.props.note)});
    }

    makeNewNote(){
        this.props.postNote({title: 'test', body: 'test', user_id: this.props.currentUser.id })
    }

    componentDidUpdate(prevProps){
        if((this.props.noteId !== prevProps.noteId)) {
            this.setState(this.props.note);
        }
    }

    render() {
        return(
            <div className="note-index">

                <div className="notes-index">
                    <header className="notes-header">
                        <h1>Notes</h1>
                    <button onClick={() => this.props.postNote({title: 'Untitled', body: '', user_id: this.props.currentUser.id })}>New Note</button>
                    </header>
                    <div>

                        <ul>
                            {this.props.notes.map(note => {
                                let url = `/notes/${note.id}`
                                return(
                                    <div>
                                        <Link to={url} key={note.id} >
                                            <li className="note- index-item" >{note.title}</li>
                                        </Link>
                                        <button onClick={() => this.props.deleteNote(note.id)}>Delete Note</button>
                                    </div>
                                )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            
        )
    }
}