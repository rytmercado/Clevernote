import React from "react";
import Navbar from './navbar/navbar'
import { Link } from 'react-router-dom'
import Modal from '../session_modal/session_modal'

export default class Splash extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
          };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    };

    showModal = () => {
        this.setState({ show: true });
    };
    
      hideModal = () => {
        this.setState({ show: false });
    };

    render(){
        return (
            <div>
                <Navbar />
                <div className="splash">
                    <div className="row">
                        <div className="splash-slogan-header">
                            <h1>Tame your work, organize your life</h1>
                        </div>
                        <div className="splash-slogan">
                            <p>Remember everything and tackle any project with your notes, tasks, and schedule all in</p>
                            <p>one place.</p>
                        </div>
                        <div>
                        
                            <Link to="/signup">
                                <button className="signup-button" onClick={this.showModal}>Sign up for free</button>
                            </Link>
                        </div>
                        <div className="splash-login-text">
                            <Link to="/login">
                                Already have an account? Log in
                            </Link>
                        </div>
                        <div>
                            <img className="splash-image" src={window.splash}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}