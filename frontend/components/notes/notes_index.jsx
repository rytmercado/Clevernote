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
    }
    
    componentDidMount(){
        this.props.getNotebooks();
        this.props.getNotes();
    }

    selectedNote(idx){
    
        this.setState({activeWord: idx})
    }

    noteIndexHeader(l){
        let header = 'Notes'
        let notes_filtered = this.props.notes
        if (this.props.notebook) {
            header = this.props.notebook.subject
            notes_filtered = this.props.notes.filter(note => note.notebook_id === this.props.notebook.id)
        }
        return (
            <header className="notes-header">
                    <div className='notes-header-top'>
                        <FontAwesomeIcon id="note-fai-large" icon={faNoteSticky} />
                        <h1 id="notes-header-fix">{header}</h1>
                    </div>
                    <a id='note-count'>{l + ' notes'}</a>
                </header>
        )
    }

    noteIndex(){

        let notes_filtered = this.props.notes
        if (this.props.notebook) {
            notes_filtered = this.props.notes.filter(note => note.notebook_id === this.props.notebook.id)
        }
        return(
            <div className="note-index">
                {this.noteIndexHeader(notes_filtered.length)}
                <div className="note-index-scroll">
                    <ul >
                        {notes_filtered.map(note => {
                    let url = `/notes/${note.id}`
                    if (this.props.notebook) {
                        url = `/notebooks/${this.props.notebook.id}/${note.id}`
                    }
                        
                        return(
                            <div 
                                className={`note-index-container${this.state.activeWord === note.id ? ' selected-note' : ''}`} 
                                onClick={() => this.selectedNote(note.id)} 
                                key={note.id} >
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
        )
    }
    render() {
   
        return(
            <>

                {this.noteIndex()}
            </>
        )
        }
    }