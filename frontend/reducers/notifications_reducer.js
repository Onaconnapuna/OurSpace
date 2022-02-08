import { RECEIVE_FRIEND_REQUESTS, REMOVE_FRIEND_REQUEST } from "../actions/friend_request_actions";

const notificationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_FRIEND_REQUESTS:
      console.log('got here')
      return action.friendRequests;
    case REMOVE_FRIEND_REQUEST:
      delete newState[action.friendRequestId];
      return newState;
    default: 
      return oldState
  }
}

export default notificationsReducer