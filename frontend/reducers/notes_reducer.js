import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from "../actions/note_actions";

const notesReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_NOTES:
            return action.notes;
        case RECEIVE_NOTE:
            newState[action.note.id] = action.note;
            return newState;
        case REMOVE_NOTE:
            delete newState[action.noteId];
            return newState;
        default:
            return state;
    }
}

export default notesReducer;