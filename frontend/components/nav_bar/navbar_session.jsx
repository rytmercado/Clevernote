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
                    <Link to="/">

                        <button onClick={() => this.props.logout()}>Logout</button>
                    </Link>
                </nav>
            </div>
        )
    }
}