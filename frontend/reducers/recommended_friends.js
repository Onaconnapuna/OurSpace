import { RECEIVE_FRIENDSHIPS, REMOVE_FRIENDSHIP } from "../actions/friendship_actions";

const recommendedFriendsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_FRIENDSHIPS:
      if (action.friendships.recommendedFriends) {
        return action.friendships.recommendedFriends;
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

export default recommendedFriendsReducer