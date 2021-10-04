import * as APIUtil from '../util/comments_api_util';
import { receivePosts } from './post_actions';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = () => ({
  type: RECEIVE_COMMENTS,
  comments
})

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment 
})

export const removeComment = commentId => ({
  type: REMOVE_COMMENT, 
  commentId
})

export const fetchComments = (postId) => dispatch => {
  return APIUtil.fetchComments(postId)
    .then(() => dispatch(receiveComments()))
}

export const createComment = (comment) => dispatch => {
  return APIUtil.createComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
}

export const deleteComment = (commentId) => {
  return APIUtil.deleteComment(commentId)
    .then( () => (removeComment(commentId)))
} 