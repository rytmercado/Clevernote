import { deleteNotebook, getNotebooks } from "../../actions/notebook_actions";
import {deleteNote, getNotes} from '../../actions/note_actions'
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import NotebookIndexItem from "./notebooks_index_item";

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId)),
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    getNotebooks: () => dispatch(getNotebooks()),
    getNotes: () => dispatch(getNotes())
})

export default withRouter(connect(mSTP, mDTP)(NotebookIndexItem))