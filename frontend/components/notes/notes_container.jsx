import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { getNotes, postNote } from "../../actions/note_actions";
import { withRouter } from 'react-router-dom';


import Notes from "./notes"

const mSTP = (state) => {
    return {
        notes: Object.values(state.entities.notes),
        currentUser: state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchNotes: () => dispatch(getNotes()),
    createNote: (note) => dispatch(posteNote(note)),
})

export default withRouter(connect(mSTP, mDTP)(Notes));