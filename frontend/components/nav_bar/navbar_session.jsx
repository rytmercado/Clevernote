import React from 'react';
import { Link } from 'react-router-dom';

export default class NavbarSession extends React.Component {
    constructor(props){
        super(props);
        this.makeNewNote = this.makeNewNote.bind(this)
    }

    makeNewNote(){
        this.props.postNote({title: 'Title', body: 'Start writing here...', user_id: this.props.currentUser.id})
    }

    render(){
        return (
            <div className="nav-bar">
                <div className="session-nav-container">
                    <nav className="session-nav">
                        <h2 id='session-greeting'>Hello {this.props.currentUser.email}</h2>
                        <Link to="/" onClick={() => this.props.logout()}>Logout
                        </Link>
                        <button id='new-note-button' onClick={this.makeNewNote}>
                        <a id='new-note-button-text'>New</a></button>
                        <Link to="/notes">Notes</Link>
                        
                        <Link to="/notes">Tags</Link>
                        <Link to="/notes">Notebooks</Link>
                    </nav>
                </div>
            </div>
        )
    }
}