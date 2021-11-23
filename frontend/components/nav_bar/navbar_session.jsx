import React from 'react';
import { Link } from 'react-router-dom';

export default class NavbarSession extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.currentUser)
        return (
            <div className="session-nav-container">
                <nav className="session-nav">
                    <h2>Hello {this.props.currentUser.email}</h2>
                    <Link to="/" onClick={() => this.props.logout()}>Logout
                    </Link>
                </nav>
            </div>
        )
    }
}