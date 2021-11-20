import React from 'react';
// import logo from '../../../../app/assets/images/logo.png'

const Navbar = () => {
    return (
        <header className="nav-container">
            <div className="topnav">
                {/* <a>Home</a> */}
                <a>
                    <img className="nav-logo" src={window.logo}></img>
                </a>
                <a id="nav-title">Clevernote</a>
                <a>Github</a>
                <div className="topnav-right">
                    <a>Help</a>
                    <a>Login</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar;