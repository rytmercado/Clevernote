import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavbarSession from './navbar_session'
import { postNote } from "../../actions/note_actions";
import { getNotebooks } from "../../actions/notebook_actions";

const mSTP = ({ session, entities: {users, notebooks}}) => {    
    return {
        currentUser: users[session.id],
        notebooks: Object.values(notebooks),
    }
}

const mDTP = dispatch => {
    return {
    logout: () => dispatch(logout()),
    postNote: (note) => dispatch(postNote(note)),
    getNotebooks: () => dispatch(getNotebooks())
    }
}

export default connect(mSTP, mDTP)(NavbarSession);