import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { getNotes, postNote, deleteNote  } from "../../actions/note_actions";
import { getNotebooks } from '../../actions/notebook_actions'
import { getTags } from "../../actions/tag_actions";
import { withRouter } from 'react-router-dom';
import { getNoteTags } from "../../actions/note_tag_actions";


import NotesIndex from "./notes_index"

const mSTP = (state, ownProps) => {
    const notebook = state.entities.notebooks[ownProps.match.params.notebookId]
    const tag = state.entities.tags[ownProps.match.params.tagId]
    return {
        notebook: notebook,
        notes: Object.values(state.entities.notes).reverse(), // this reverse might be dangerous, dont forget about it
        currentUser: state.entities.users[state.session.id],
        notebooks: Object.values(state.entities.notebooks),
        tag: tag,
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    getNotes: () => dispatch(getNotes()),
    postNote: (note) => dispatch(postNote(note)),
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    getNotebooks: () => dispatch(getNotebooks()),
    getTags: () => dispatch(getTags()),
    getNoteTags: () => dispatch(getNoteTags())
})

export default withRouter(connect(mSTP, mDTP)(NotesIndex));