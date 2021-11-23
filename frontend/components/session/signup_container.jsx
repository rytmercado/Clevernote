import { connect } from "react-redux";
import { signup, login } from '../../actions/session_actions';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
    signup: formUser => dispatch(signup(formUser)),
    login: formUser => dispatch(login(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);