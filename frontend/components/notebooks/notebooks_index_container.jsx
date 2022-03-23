import {getNotebooks} from '../../actions/notebook_actions';
import { getNotes } from '../../actions/note_actions';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import NotebooksIndex from './notebooks_index';

const mSTP = (state) => {

    return {
        notebooks: Object.values(state.entities.notebooks),
        currentUser: state.entities.users[state.session.id],
        
    }
}

const mDTP = dispatch => ({
    getNotebooks: () => dispatch(getNotebooks()),
    getNotes: () => dispatch(getNotes())
})

export default withRouter(connect(mSTP, mDTP)(NotebooksIndex))