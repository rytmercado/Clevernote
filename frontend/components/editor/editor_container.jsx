import { connect } from "react-redux";
import Editor from "./editor";
import { getNote, getNotes, patchNote } from "../../actions/note_actions"
import { getNotebooks } from "../../actions/notebook_actions";
import {getNoteTags, postNoteTag} from '../../actions/note_tag_actions'
import { getTags, postTag } from "../../actions/tag_actions";


const mSTP = (state, ownProps) => {
    const note = state.entities.notes[ownProps.match.params.noteId];
    const currentUser = state.entities.users[state.session.id]

    return {
        currentUser: currentUser,
        note: note,
        notes: state.entities.notes,
        noteId: ownProps.match.params.noteId,
        notebooks: state.entities.notebooks,
        tags: Object.values(state.entities.tags),
    }
}

const mDTP = (dispatch) => {
    return {
        getNotes: () => dispatch(getNotes()),
        getNote: (noteId) => dispatch(getNote(noteId)),
        patchNote: note => dispatch(patchNote(note)),
        getNotebooks: () => dispatch(getNotebooks()),
        getNoteTags: () => dispatch(getNoteTags()),
        getTags: () => dispatch(getTags()),
        postTag: tag => dispatch(postTag(tag)),
        postNoteTag: (noteTag) => dispatch(postNoteTag(noteTag))
    }
}

export default connect(mSTP, mDTP)(Editor)