import React from "react";
import { Link } from "react-router-dom";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import Notes from "./notes";
import timeSince from "../../util/time_since_util";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faNoteSticky } from '@fortawesome/free-solid-svg-icons'
// import Notes from "./notes";


export default class NotesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeWord: -1
        }
        this.makeNewNote = this.makeNewNote.bind(this)
        // this.selectedNote = this.selectedNote.bind(this)  
      }

    componentDidMount(){
        this.props.getNotes();
    }

    makeNewNote(){
        this.props.postNote({title: 'Title', body: 'Start writing here...', user_id: this.props.currentUser.id })
    }

    selectedNote(idx){
        // set the state to only have a current word selection which will unselect the previous selection
        console.log(idx)
        this.setState({activeWord: idx})
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
                        <div className='notes-header-top'>
                            <FontAwesomeIcon id="note-fai-large" icon={faNoteSticky} />
                            <h1 id="notes-header-fix">Notes</h1>
                        </div>
                        <a id='note-count'>{this.props.notes.length + ' notes'}</a>
                    </header>
                    <div>

                        <ul>
                            {this.props.notes.map(note => {
                                let url = `/notes/${note.id}`
                                return(
                                    <div className={`note-index-container${this.state.activeWord === note.id ? ' selected-note' : ''}`} onClick={() => this.selectedNote(note.id)} key={note.id} >
                                        <Link to={url} >
                                            <li  className="note-index-item" >{note.title}</li>
                                            <div className="delete-note-container">

                                                <FontAwesomeIcon onClick={() => this.props.deleteNote(note.id)} icon={faTrash} />
                                            </div>
                                            <div className="note-index-item-bottom">
                                                <span id='note-count'>{'last updated ' + timeSince(note.updated_at) + ' ago'}</span>
                                            </div>
                                        </Link>
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