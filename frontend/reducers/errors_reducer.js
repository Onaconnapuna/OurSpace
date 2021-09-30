import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import { REMOVE_SESSION_ERRORS } from "../actions/session_actions";

const errorsReducer = combineReducers({
  session: SessionErrorsReducer
})

export default errorsReducer