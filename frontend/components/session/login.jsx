import React from 'react';
import { Link} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({
      email: 'demo@clevernote.com',
      password: 'password',
    }).then(() => this.props.history.push('/home'));
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/home'));
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


  render() {
    return (
      <div className="sessionform">
      
        <div className="formcontainer">
          <h2>Clevernote</h2>
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
              <button onClick={this.handleSubmit}>Log In!</button>
              <button onClick={this.demoLogin}>Demo Log In</button>
              <p>Don't have an account?</p>
              <Link to='/signup'>Create account</Link>
            </label>
          </form>
        </div>
        
      </div>
    );
  }
}

export default Login;
