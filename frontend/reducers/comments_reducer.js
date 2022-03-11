import { REMOVE_COMMENT, RECEIVE_COMMENT, RECEIVE_COMMENTS} from "../actions/comment_actions";

const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      newState[action.postId] = action.comments 
      // return action.comments;
      return newState
    case RECEIVE_COMMENT: 
      newState[action.comment.id] = action.comment 
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.postId.commentId];
      return newState;
    default:
      return oldState;
  }
}

export default commentsReducer