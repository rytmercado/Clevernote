import { connect } from "react-redux";
import { clearSessionErrors, signup, login } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = ({errors}) => {
    return {
      errors: errors
    }
  }

const mapDispatchToProps = dispatch => ({
    signup: formUser => dispatch(signup(formUser)),
    login: formUser => dispatch(login(formUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);