import React from 'react';
import { Link } from 'react-router-dom';

export default class NavbarSession extends React.Component {
    constructor(props){
        super(props);
        this.makeNewNote = this.makeNewNote.bind(this)
    }

    makeNewNote(){
        this.props.postNote({title: 'test', body: 'test', user_id: this.props.currentUser.id })
    }

    render(){
        return (
            <div className="nav-bar">
                <div className="session-nav-container">
                    <nav className="session-nav">
                        <h2>Hello {this.props.currentUser.email}</h2>
                        <Link to="/" onClick={() => this.props.logout()}>Logout
                        </Link>
                        <button onClick={this.makeNewNote}>New Note</button>
                    </nav>
                </div>
            </div>
        )
    }
}