import React from "react";
import { Link } from 'react-router-dom';



class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.renderErrors = this.renderErrors.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
            // .then(() => this.props.history.push('/notes'));
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.login({
          email: 'demo@clevernote.com',
          password: 'password',
        }); //.then(() => this.props.history.push('/notes'));
      }

      renderErrors() {
        if (this.props.errors.length === 0){
            return [];
        } 
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
        
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    
    render () {
        return (
            <div className="sessionform">
                <div className="formcontainer">
                <Link to='/' >
                 <img className="sessionlogo" src={window.logo}></img>
                </Link>
                <h2>Clevernote</h2>
                <p>Remember everything important.</p>
                <br/>
                    <div className="errors">{this.renderErrors()}</div>
                    <form>
                            <input
                                placeholder="Email"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                            <input
                                placeholder="Password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        <button className='session-button' onClick={this.handleSubmit}>Sign Up</button>
                        <button className='session-button' onClick={this.demoLogin}>Demo Log In</button>
                        <p className='light-grey-text' >Already have an account?</p>
                        <Link className='light-green-text' to='/login'>Login</Link>
                    </form>
                </div>
            </div>
        );
    }
};

export default Signup