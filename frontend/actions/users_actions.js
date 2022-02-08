import * as APIUtil from '../util/users_api_util';
import { receiveCurrentUser } from './session_actions';
import { RECEIVE_CURRENT_USER } from './session_actions';

export const RECEIVE_USER = 'RECEIVE_USER'

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const fetchUser = (userId) => (dispatch) => {
  return APIUtil.fetchUser(userId)
    .then( user => dispatch(receiveUser(user)))
}

export const fetchCurrentUser = (currentUserId) => dispatch => {
  return APIUtil.fetchUser(currentUserId)
    .then( user => dispatch(receiveCurrentUser(user)))
}

export const updateUser = (user) => (dispatch) => {
  return APIUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)))
}