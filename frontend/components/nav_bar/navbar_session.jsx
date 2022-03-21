import React from 'react';
import { Link } from 'react-router-dom';

export default class NavbarSession extends React.Component {
    constructor(props){
        super(props);
        this.makeNewNote = this.makeNewNote.bind(this)
    }

    makeNewNote(){
        console.log(this.props) 
        this.props.postNote({title: 'Title', body: '', user_id: this.props.currentUser.id, notebook_id: this.props.notebooks[0].id}).then(() => this.props.getNotebooks())
    }

    componentDidMount() {
        this.props.getNotebooks();
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
                            <a id='new-note-button-text'>+ New</a></button>
                        <Link className='grey-hover' to="/notes">Notes</Link>
                        <Link className='grey-hover' to="/tags">Tags</Link>
                        <Link className='grey-hover' to="/notebooks">Notebooks</Link>
                    </nav>
                </div>
            </div>
        )
    }
}