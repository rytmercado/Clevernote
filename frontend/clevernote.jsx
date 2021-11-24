import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import * as noteActions from './actions/note_actions'

// import { RECEIVE_NOTE, RECEIVE_NOTES, REMOVE_NOTE} from './actions/note_actions'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
      const preloadedState = {
        entities: {
          users: {[window.currentUser.id]: window.currentUser}
        },
        session: {id: window.currentUser.id}
      }
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

    window.store = store;
    // window.postNote = noteApiUtil.postNote;
    window.getNotes = noteActions.getNotes;
    window.postNote = noteActions.postNote;

    // window.RECEIVE_NOTES = RECEIVE_NOTES;
    // window.signup = sessionApiUtil.signup
    ReactDOM.render(<Root store={store} />, root);
})