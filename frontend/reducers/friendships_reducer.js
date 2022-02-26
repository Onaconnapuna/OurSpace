import { RECEIVE_FRIENDSHIPS, REMOVE_FRIENDSHIP } from "../actions/friendship_actions";

const friendshipReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_FRIENDSHIPS:
      if (action.friendships.friendships) {
        return action.friendships.friendships;
      } else  {
        return {}
      }
    case REMOVE_FRIENDSHIP:
      delete newState[action.friendshipId];
      return newState;
    default: 
      return oldState
  }
}

export default friendshipReducer