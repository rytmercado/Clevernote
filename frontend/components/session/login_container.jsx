import React from 'react';
import { connect } from 'react-redux';
import { clearSessionErrors, login } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors
  }
}

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
