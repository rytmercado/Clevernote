import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../session_modal/session_modal';

const Navbar = () => {
    return (
        <header className="nav-container">
            <div className="topnav">
                <img className="nav-logo" src={window.logo}></img>
                <a href='#/' id="nav-title">Clevernote</a>
                <a href='https://github.com/rytmercado' target="_blank">Github</a>
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