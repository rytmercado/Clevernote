import { connect } from "react-redux";
import { getTags, postTag, deleteTag  } from "../../actions/tag_actions";
import { withRouter } from 'react-router-dom';


import TagIndex from "./tag_index"

const mSTP = (state) => {
    return {
        tags: Object.values(state.entities.tags),
        currentUser: state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => ({
    getTags: () => dispatch(getTags()),
    postTag: (tag) => dispatch(postTag(tag)),
    deleteTag: (tagId) => dispatch(deleteTag(tagId)),
})

export default withRouter(connect(mSTP, mDTP)(TagIndex));