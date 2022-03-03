import React from 'react';
import { Route } from 'react-router-dom';
import NavbarSessionContainer from '../nav_bar/navbar_session_container'
import NotebooksIndexContainer from './notebooks_index_container'
import NotesIndexContainer from '../notes/notes_index_container'
import EditorContainer from '../editor/editor_container'

const Notebooks = () => {
    return (
        <div className="home-container">
            <NavbarSessionContainer />
            <Route exact path="/notebooks" component={NotebooksIndexContainer}/>
            <Route path="/notebooks/:notebookId" component={NotesIndexContainer}/>
            <Route path="/notebooks/:notebookId/:noteId" component={EditorContainer}/>
        </div>
    )
}

export default Notebooks;