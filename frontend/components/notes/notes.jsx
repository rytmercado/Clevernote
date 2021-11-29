import React from 'react'
import { Route, Switch, Link } from "react-router-dom";
import NavbarSessionContainer from '../nav_bar/navbar_session_container'
import NotesIndexContainer from './notes_index_container'
// import NotesIndex from './notes_index';




const Notes = () => {
    return (
        <div className="home-container">
            <div className="nav-bar">
                <NavbarSessionContainer />
            </div>
            <div className="note-index">
                <NotesIndexContainer />
            </div>
            <div className="note-body">
                <h1>Title</h1>
                <p>Start writing here.</p>
            </div>
        </div>
    )

}

export default Notes;