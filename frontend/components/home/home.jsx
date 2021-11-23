import React from 'react'
import { Route, Switch, Link } from "react-router-dom";
import NavbarSessionContainer from '../nav_bar/navbar_session_container'




const Home = () => {
    return (
        <div className="home-container">
            <div className="nav-bar">

            <NavbarSessionContainer />
            </div>
            <div className="note-index">
                <h1>Notes</h1>
            </div>
            <div className="note-body">
                <h1>Note Body</h1>
            </div>
        </div>
    )

}

export default Home;