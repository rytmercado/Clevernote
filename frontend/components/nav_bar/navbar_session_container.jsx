import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavbarSession from './navbar_session'
import { postNote } from "../../actions/note_actions";
import { getNotebooks } from "../../actions/notebook_actions";
import { getNotes } from "../../actions/note_actions";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

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
    getNotebooks: () => dispatch(getNotebooks()),
    getNotes: () => dispatch(getNotes())
    }
}

export default connect(mSTP, mDTP)(NavbarSession);