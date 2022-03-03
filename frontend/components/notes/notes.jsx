import React from 'react'
import { Route, Switch, Link } from "react-router-dom";
import NavbarSessionContainer from '../nav_bar/navbar_session_container'
import NotesIndexContainer from './notes_index_container'
// import NotesIndex from './notes_index';
import EditorContainer from '../editor/editor_container';




const Notes = () => {
    return (

        <div className="home-container">
            <NavbarSessionContainer />
            <Route path="/notes" component={NotesIndexContainer}/>
            <Route path="/notes/:noteId" component={EditorContainer}/>
            
        </div>
    )

}

export default Notes;