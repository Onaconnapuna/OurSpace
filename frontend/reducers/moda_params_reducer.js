import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const modalParamsReducer = (state = null, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case OPEN_MODAL:
      newState['params'] = action.params;
      return newState
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default modalParamsReducer;