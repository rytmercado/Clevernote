import React from "react";
import { Link } from "react-router-dom";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import Notes from "./notes";
import timeSince from "../../util/time_since_util";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faNoteSticky, faTag, faBook } from '@fortawesome/free-solid-svg-icons'
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
        this.props.getTags();
        this.props.getNoteTags();
    }

    selectedNote(idx){
    
        this.setState({activeWord: idx})
    }

    extractBodyText(str){
        const span = document.createElement('span');
        span.innerHTML = str;
        return span.textContent || span.innerText;

    }

    makeNewNoteButton(){
        let nbId
        if (this.props.notebook) {
            nbId = this.props.notebook.id
        } else if (this.props.notebooks[0]) {
            nbId = this.props.notebooks[0].id
        } 
        return (
            <div>

                <h1 className='heavy-white-text'> Create your first note</h1>
                <div className='medium-grey-text'>Click the  

                    <a onClick={() => this.props.postNote(
                    {
                        title: 'Title',
                        body: '',
                        user_id: this.props.currentUser.id,
                        notebook_id: nbId
                    }
                    ).then(() => {

                    this.props.getNotes()
                    this.props.history.push(`/notebooks/${nbId}`)
                    })}>
                     + New Note</a>  button in the sidebar to get started.
                </div>
            </div>

        )
    }

    noteIndexHeader(l){
        let header = 'Notes';
        let symbol = faNoteSticky;
        if (this.props.tag){
            header = this.props.tag.name;
            symbol = faTag;
        }
        else if (this.props.notebook) {
            header = this.props.notebook.subject
            symbol = faBook;
        }
        return (
            <header className="notes-header">
                    <div className='notes-header-top'>
                        <FontAwesomeIcon id="note-fai-large" icon={symbol} />
                        <h1>{header}</h1>
                    </div>
                    <a id='note-count'>{l + ' notes'}</a>
                </header>
        )
    }

    render() {
        // console.log(notesFiltered)
        let notesFiltered = [];
        if (!notesFiltered) {
            console.log('not here')
            return null
        }

        if (this.props.tag) {
            console.log(this.props)
            notesFiltered = this.props.tag.notes
        }
        else if (this.props.notebook) {
            notesFiltered = this.props.notes.filter(note => note.notebook_id === this.props.notebook.id)
        }

        else {
            notesFiltered = Object.values(this.props.notes)
        }
        // console.log(notesFiltered)
        if (!notesFiltered) {
            return (
            <div className="note-index">
                {this.noteIndexHeader(0)}
                <div className='flex-center-div'>
                <button >

                    {this.makeNewNoteButton()}
                </button>
                </div>
            </div>)
        } else {

        }
        return(
            <div className="note-index">
                {this.noteIndexHeader(notesFiltered.length)}
                <div className="note-index-scroll">
                    <ul >
                        {notesFiltered.map(note => {
                        let url = `/notes/${note.id}`
                        if (this.props.tag) {
                            url = `/tags/${this.props.tag.id}/${note.id}`
                        }
                        else if (this.props.notebook) {
                        url = `/notebooks/${this.props.notebook.id}/${note.id}`
                    }
                        
                        return(
                            <div 
                                className={`note-index-container${this.state.activeWord === note.id ? ' selected-note' : ''}`} 
                                onClick={() => this.selectedNote(note.id)} 
                                key={note.id} >
                                <Link to={url} >
                                    <li  className="note-index-item" >{note.title}</li>
                                    <li className='note-index-item-body'>{this.extractBodyText(note.body).slice(0, 20)}</li>
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
    }