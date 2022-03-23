import * as noteTagApiUtil from '../util/note_tag_api_util'

export const RECEIVE_NOTE_TAGS = 'RECEIVE_NOTE_TAGS';
export const RECEIVE_NOTE_TAG = 'RECEIVE_NOTE_TAG';
export const REMOVE_NOTE_TAG = 'REMOVE_NOTE_TAG';

const receiveNoteTags = (note_tags) => ({
    type: RECEIVE_NOTE_TAGS,
    note_tags
});

const receiveNoteTag = (note_tag) => ({
    type: RECEIVE_NOTE_TAG,
    note_tag
});

const removeNoteTag = ({id}) => ({
    type: REMOVE_NOTE_TAG,
    id
});

export const getNoteTags = () => dispatch => (
    noteTagApiUtil.getNoteTags()
        .then(noteTags => (dispatch(receiveNoteTags(noteTags))))
);

export const getNoteTag = noteTagId => dispatch => (
    noteTagApiUtil.getNoteTag(noteTagId)
        .then(noteTag => dispatch(receiveNoteTag(noteTag)))
);

export const postNoteTag = noteTag => dispatch => (
    noteTagApiUtil.postNoteTag(noteTag)
        .then(noteTag => dispatch(receiveNoteTag(noteTag)))
);

export const patchNoteTag = noteTag => dispatch => (
    noteTagApiUtil.patchNoteTag(noteTag)
        .then(noteTag => dispatch(receiveNoteTag(noteTag)))
);

export const deleteNoteTag = noteTagId => dispatch => (
    noteTagApiUtil.deleteNoteTag(noteTagId)
        .then(noteTagId => dispatch(removeNoteTag(noteTagId)))
)