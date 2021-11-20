import React from 'react';

const Navbar = () => {
    return (
        <header className="nav-container">
            <div className="topnav">
                {/* <a>Home</a> */}
                <a>Clevernote</a>
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