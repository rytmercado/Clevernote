import * as tagApiUtil from '../util/tag_api_util'

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

const receiveTags = (tags) => ({
    type: RECEIVE_TAGS,
    tags
});

const receiveTag = (tag) => ({
    type: RECEIVE_TAG,
    tag
});

const removeTag = ({id}) => ({
    type: REMOVE_TAG,
    id
});

export const getTags = () => dispatch => {
    tagApiUtil.getTags()
        .then(tags => {
            console.log(tags)
            
            dispatch(receiveTags(tags))})
}


;

export const getTag = tagId => dispatch => (
    tagApiUtil.getTag(tagId)
        .then(Tag => dispatch(receiveTag(tag)))
);

export const postTag = tag => dispatch => (
    tagApiUtil.postTag(tag)
        .then(tag => dispatch(receiveTag(tag)))
);

export const patchTag = tag => dispatch => (
    tagApiUtil.patchTag(tag)
        .then(tag => dispatch(receiveTag(tag)))
);

export const deleteTag = tagId => dispatch => (
    tagApiUtil.deleteTag(tagId)
        .then(tagId => dispatch(removeTag(tagId)))
)