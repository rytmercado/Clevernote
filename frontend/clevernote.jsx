import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import * as notebookActions from './actions/notebook_actions'
import * as tagApiUtil from './util/tag_api_util'
import * as noteTagApiUtil from './util/note_tag_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;

    if (window.currentUser) {

      const preloadedState = {
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
      };


      store = configureStore(preloadedState);

      delete window.currentUser;

    } else {

      store = configureStore();

    }

    window.getNotebooks = notebookActions.getNotebooks

    window.store = store;

    window.getTags = tagApiUtil.getTags
    window.getNoteTags = noteTagApiUtil.getNoteTags
    window.getNoteTag = noteTagApiUtil.getNoteTag

    ReactDOM.render(<Root store={store} />, root);
})