import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavbarSession from './navbar_session'

const mSTP = ({ session, entities: {users}}) => {
    return {
        currentUser: users[session.id]
    }
}

const mDTP = dispatch => {
    return {
    logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(NavbarSession);