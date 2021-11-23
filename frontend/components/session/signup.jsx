import React from "react";



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
        this.props.signup(this.state)
            .then(() => this.props.history.push('/home'));
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.login({
          email: 'demo@clevernote.com',
          password: 'password',
        }).then(() => this.props.history.push('/home'));
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
                        {/* {console.log(error)} */}
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
                <h2>SignUp!</h2>
                <div className="errors">{this.renderErrors()}</div>
                <form>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                    <button onClick={this.demoLogin}>Demo Log In</button>
                </form>
            </div>
        );
    }
};

export default Signup