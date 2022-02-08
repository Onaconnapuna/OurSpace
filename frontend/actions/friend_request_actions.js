import * as APIUtil from '../util/friend_requests_api_util';

export const RECEIVE_FRIEND_REQUESTS = 'RECEIVE_FRIEND_REQUESTS'
export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST'

export const receiveFriendRequests =  friendRequests => ({
  type: RECEIVE_FRIEND_REQUESTS, 
  friendRequests
})

export const removeFriendRequest = friendRequestId => ({
  type: REMOVE_FRIEND_REQUEST,
  friendRequestId
})

export const fetchFriendRequests = (userId) => dispatch => {
  return APIUtil.fetchFriendRequests(userId)
    .then((friendRequests) => dispatch(receiveFriendRequests(friendRequests)))
}

export const createFriendRequest = (friendRequest) => dispatch => {
  return APIUtil.createFriendRequest(friendRequest)
}

export const deleteFriendRequest = (friendRequestId) => dispatch => {
  return APIUtil.deleteFriendRequest(friendRequestId)
    .then(() => dispatch(removeFriendRequest(friendRequestId)))
}