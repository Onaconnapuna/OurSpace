import * as APIUtil from '../util/likes_api_util';

export const createLike = (like) => dispatch => {
  return APIUtil.createLike(like)
}

export const deleteLike = (likeId) => dispatch => {
  return APIUtil.deleteLike(likeId)
}