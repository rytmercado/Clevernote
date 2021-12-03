import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { getNotes, postNote, deleteNote  } from "../../actions/note_actions";
import { withRouter } from 'react-router-dom';


import NotesIndex from "./notes_index"

const mSTP = (state) => {
    return {
        notes: Object.values(state.entities.notes),
        currentUser: state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    getNotes: () => dispatch(getNotes()),
    postNote: (note) => dispatch(postNote(note)),
    deleteNote: (noteId) => dispatch(deleteNote(noteId))
})

export default withRouter(connect(mSTP, mDTP)(NotesIndex));