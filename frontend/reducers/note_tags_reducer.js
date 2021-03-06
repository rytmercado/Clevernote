import { RECEIVE_NOTE_TAGS, RECEIVE_NOTE_TAG, REMOVE_NOTE_TAG } from "../actions/note_tag_actions";

const noteTagsReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_NOTE_TAGS:
            return action.note_tags;
        case RECEIVE_NOTE_TAG:
            newState[action.note_tag.id] = action.note_tag;
            return newState;
        case REMOVE_NOTE_TAG:
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default noteTagsReducer;