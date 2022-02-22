import React from 'react';
import { Route } from 'react-router-dom';
import NavbarSessionContainer from '../nav_bar/navbar_session_container'
import NotebooksIndexContainer from './notebooks_index_container'


const Notebooks = () => {
    return (
        <div className="home-container">
            <NavbarSessionContainer />
            <Route path="/notebooks" component={NotebooksIndexContainer}/>
        </div>
    )
}

export default Notebooks;