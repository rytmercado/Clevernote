import React from "react";
import { Link } from "react-router-dom";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import Notes from "./notes";
import timeSince from "../../util/time_since_util";
// import Notes from "./notes";


export default class NotesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.makeNewNote = this.makeNewNote.bind(this)
    }

    componentDidMount(){
        this.props.getNotes();
    }

    makeNewNote(){
        this.props.postNote({title: 'Title', body: 'Start writing here...', user_id: this.props.currentUser.id })
    }

    // componentDidUpdate(prevProps){
    //     if((this.props.noteId !== prevProps.noteId)) {
    //         console.log(this.props.note)
    //         this.setState(this.props.note);
    //     }
    // }

    render() {
        return(
            <div className="note-index">

                <div className="notes-index">
                    <header className="notes-header">
                        <h1>Notes</h1>
                    <button onClick={this.makeNewNote}>New Note</button>
                    </header>
                    <div>

                        <ul>
                            {this.props.notes.map(note => {
                                let url = `/notes/${note.id}`
                                {/* console.log(note) */}
                                return(
                                    <div className='note-index-container' key={note.id}>
                                        <Link to={url}  >
                                            <li  className="note-index-item" >{note.title}</li>
                                        </Link>
                                        <button onClick={() => this.props.deleteNote(note.id)}>Delete Note</button>
                                        <a>{'last updated ' + timeSince(note.updated_at) + ' ago'}</a>
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