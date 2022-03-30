import React from "react";
import Navbar from './navbar/navbar'
import { Link } from 'react-router-dom'
import Modal from "../modal/modal";
import HelpModal from './help_modal'

export default class Splash extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false
        }

        this.showModal = this.showModal.bind(this)
        this.closeModal = this.closeModal.bind(this)

    };

    closeModal(){
        this.setState({showModal:false})
      }
      
      showModal(){
        this.setState({showModal:true})
      }

    render(){
        return (
            <div>
                <Navbar showModal={this.showModal} closeModal={this.closeModal} />
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
                                <button className="signup-button">Sign up for free</button>
                            </Link>
                        </div>
                        <div className="splash-login-text">
                            <Link to="/login">
                                Already have an account? Log in
                            </Link>
                        </div>
                        <div className='flex-simple'>
                            <img className="splash-image" src={window.splash}></img>
                            <div className="splash-features">
                                <h1>WORK ANYWHERE</h1>
                                <p>Keep important info handy—your notes sync automatically to all your devices.</p>
                                <h1>REMEMBER EVERYTHING</h1>
                                <p>Make notes more useful by adding text, images, audio, scans, PDFs, and documents.</p>
                                <h1>TURN TO-DO INTO DONE</h1>
                                <p>Bring your notes, tasks, and schedules together to get things done more easily.</p>
                                <h1>FIND THINGS FAST</h1>
                                <p>Get what you need, when you need it with powerful, flexible search capabilities.</p>
                            </div>
                        </div>
                        <h1 className='splash-slogan-header-small'>Find your productivity happy place</h1>
                    </div>
                </div>
                <Modal show={this.state.showModal} children={<HelpModal closeModal={this.closeModal}/>} />
            </div>
        )
    }
}