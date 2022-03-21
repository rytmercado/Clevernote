import * as notebookApiUtil from '../util/notebook_api_util';
import { REMOVE_NOTE } from './note_actions';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

const receiveNotebooks = (notebooks) => ({
    type: RECEIVE_NOTEBOOKS,
    notebooks
});

const receiveNotebook = notebook => ({
    type: RECEIVE_NOTEBOOK,
    notebook
});

const removeNotebook = ({id}) => ({
    type: REMOVE_NOTEBOOK,
    id
});

export const getNotebooks = () => dispatch => (
    notebookApiUtil.getNotebooks()
        .then(notebooks => dispatch(receiveNotebooks(notebooks)))
);

export const getNotebook = noteboookId => dispatch => (
    notebookApiUtil.getNotebook(notebookId)
        .then(notebook => dispatch(receiveNotebook(notebook)))
);

export const postNotebook = notebook => dispatch => (
    notebookApiUtil.postNotebook(notebook)
        .then(notebook => dispatch(receiveNotebook(notebook)))
);

export const patchNotebook = notebook => dispatch => (
    notebookApiUtil.patchNotebook(notebook)
        .then(notebook => dispatch(receiveNotebook(notebook)))
);

export const deleteNotebook = notebookId => dispatch => (
    notebookApiUtil.deleteNotebook(notebookId)
        .then(notebookId => dispatch(removeNotebook(notebookId)))
);