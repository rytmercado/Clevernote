import React from 'react';
import { connect } from 'react-redux';
import { patchNotebook, getNotebooks } from '../../actions/notebook_actions'; 
import {getNotes} from '../../actions/note_actions'
import RenameNotebookForm from './rename_notebook_form'


const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => ({
    patchNotebook: (notebook) => dispatch(patchNotebook(notebook)),
    getNotebooks: () => dispatch(getNotebooks()),
    getNotes: () => dispatch(getNotes())
})

export default connect(mSTP, mDTP)(RenameNotebookForm)