import React from 'react';
import { connect } from 'react-redux';
import { postNotebook } from '../../actions/notebook_actions'; 
import NewNotebookForm from './new_notebook_form'


const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => ({
    postNotebook: (notebook) => dispatch(postNotebook(notebook))
})

export default connect(mSTP, mDTP)(NewNotebookForm)