import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import sessionErrorReducer from "./session_error_reducer";

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: sessionErrorReducer,
})
