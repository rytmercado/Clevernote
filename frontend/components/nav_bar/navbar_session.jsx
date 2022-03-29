import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faNoteSticky, faTag, faBook } from '@fortawesome/free-solid-svg-icons'

export default class NavbarSession extends React.Component {
    constructor(props){
        super(props);
        this.makeNewNote = this.makeNewNote.bind(this)
    }

    makeNewNote(){
        this.props.postNote({title: 'Title', body: '', user_id: this.props.currentUser.id, notebook_id: this.props.notebooks[0].id}).then(() => {
            this.props.getNotebooks()
            this.props.getNotes()
        })
    }

    componentDidMount() {
        this.props.getNotes();
        this.props.getNotebooks();
    }

    render(){
        return (
            <div className="nav-bar">
                <div className="session-nav-container">
                    <nav className="session-nav">
                        <h2 id='session-greeting'>Hello {this.props.currentUser.email}</h2>
                        <Link className='grey-hover' to="/" onClick={() => this.props.logout()}>Logout
                        </Link>
                        <button id='new-note-button' onClick={this.makeNewNote}>
                            <a id='new-note-button-text'>+ New Note</a></button>
                        <Link 
                            className={this.props.selected === 'notes' ? 'selected-nav grey-hover' : 'grey-hover'} 
                            to="/notes">
                            <FontAwesomeIcon id="note-fai-large" icon={faNoteSticky} />
                            Notes
                        </Link>
                        <Link 
                            className={this.props.selected === 'tags' ? 'selected-nav grey-hover' : 'grey-hover'} 
                            to="/tags">
                            <FontAwesomeIcon id="note-fai-large" icon={faTag} />
                            Tags
                        </Link>
                        <Link 
                            className={this.props.selected === 'notebooks' ? 'selected-nav grey-hover' : 'grey-hover'} 
                            to="/notebooks">
                            <FontAwesomeIcon id="note-fai-large" icon={faBook} />
                            Notebooks
                        </Link>
                        <br/>
                        <div className='nav-link-icon grey-hover'>
                            <img className='small-icon' src={window.github}></img>
                            
                            <a className='grey-hover zero-padding-left' href='https://github.com/rytmercado' target="_blank">
                                Github</a>
                        </div>
                        <div className='nav-link-icon grey-hover'>
                            <img className='small-icon-angelist' src={window.angelist}></img>
                            
                            <a className='grey-hover zero-padding-left' href='https://angel.co/ry-mercado' target="_blank">
                                AngelList</a>
                        </div>
                        <div className='nav-link-icon grey-hover'>
                            <img className='small-icon' src={window.linkedin}></img>
                            
                            <a className='grey-hover zero-padding-left' href='https://linkedin.com/in/ry-mercado' target="_blank">
                                Linkedin</a>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}