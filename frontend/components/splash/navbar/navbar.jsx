import React from 'react';

const Navbar = () => {
    return (
        <header className='nav-container'>
            <div className='row'>
                <div className='navbar'>
                    <div className='left-nav'>
                        <a>Clevernote</a>
                        <a>Github</a>
                    </div>
                    <div className='right-nav'>
                        <a>Login</a>
                        <a>Sign Up!</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;