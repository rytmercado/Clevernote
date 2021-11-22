import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="nav-container">
            <div className="topnav">
                <img className="nav-logo" src={window.logo}></img>
                <a id="nav-title">Clevernote</a>
                <a>Github</a>
                <div className="topnav-right">
                    <a>Help</a>
                    <Link to="/login">
                        Log In
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar;