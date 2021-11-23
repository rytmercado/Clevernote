import { postUser, postSession, deleteSession } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER ='RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER ='LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS ='RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
})

const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})

export const signup = formUser => dispatch => {
  return postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
}

export const login = formUser => dispatch => {
  return postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const logout = () => dispatch => 
  deleteSession()
    .then(() => dispatch(logoutCurrentUser()))

export const clearSessionErrors = () => (dispatch) => {
      dispatch(clearErrors())
}

