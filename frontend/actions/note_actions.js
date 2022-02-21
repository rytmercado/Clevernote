import * as noteApiUtil from '../util/note_api_util';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

const receiveNotes = (notes) => ({
    type: RECEIVE_NOTES,
    notes
});

const receiveNote = (note) => ({
    type: RECEIVE_NOTE,
    note
});

const removeNote = ({id}) => ({
    type: REMOVE_NOTE,
    id
});

export const getNotes = () => dispatch => (
    noteApiUtil.getNotes()
        .then(notes => dispatch(receiveNotes(notes)))
);

export const getNote = noteId => dispatch => (
    noteApiUtil.getNote(noteId)
        .then(note => dispatch(receiveNote(note)))
);

export const postNote = note => dispatch => (
    noteApiUtil.postNote(note)
        .then(note => dispatch(receiveNote(note)))
);

export const patchNote = note => dispatch => (
    noteApiUtil.patchNote(note)
        .then(note => dispatch(receiveNote(note)))
);

export const deleteNote = noteId => dispatch => (
    noteApiUtil.deleteNote(noteId)
        .then(noteId => dispatch(removeNote(noteId)))
)