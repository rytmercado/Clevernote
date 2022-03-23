import React from 'react'
import { Route, Switch, Link } from "react-router-dom";
import NavbarSessionContainer from '../nav_bar/navbar_session_container'
import TagIndex from './tag_index_container';
import NotesIndex from '../notes/notes_index_container';
import Editor from '../editor/editor_container';

const Tags = () => {
    return (

        <div className="home-container">
            <NavbarSessionContainer selected={'tags'} />
            <Route path="/tags/:tagId" component={NotesIndex}/>
            <Route path="/tags/:tagId/:noteId" component={Editor}/>
            <Route exact path="/tags" component={TagIndex}/>            
        </div>
    )

}

export default Tags;