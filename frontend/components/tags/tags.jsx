import React from 'react'
import { Route, Switch, Link } from "react-router-dom";
import NavbarSessionContainer from '../nav_bar/navbar_session_container'
import TagIndex from './tag_index_container';

const Tags = () => {
    return (

        <div className="home-container">
            <NavbarSessionContainer />
            <Route path="/tags" component={TagIndex}/>
            
        </div>
    )

}

export default Tags;