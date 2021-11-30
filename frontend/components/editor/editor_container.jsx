import { connect } from "react-redux";
import Editor from "./editor";
import { getNote, getNotes } from "../../actions/note_actions"

const mSTP = (state, ownProps) => {
    const note = state.entities.notes[ownProps.match.params.noteId];
    // console.log(note);

    return {
        note: note,
        notes: state.entities.notes,
        noteId: ownProps.match.params.noteId,
    }
}

const mDTP = (dispatch) => {
    return {
        getNotes: () => dispatch(getNotes()),
        getNote: (noteId) => dispatch(getNote(noteId))
    }
}

export default connect(mSTP, mDTP)(Editor)