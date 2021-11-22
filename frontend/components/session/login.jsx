import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  render() {
    // console.log(this.props);
    return (
      <div className="sessionform">
        <h2>Log In!</h2>
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
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
