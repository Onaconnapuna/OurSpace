import * as APIUtil from '../util/friendships_api_util';

export const RECEIVE_FRIENDSHIPS = 'RECEIVE_FRIENDSHIPS'
export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP'
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP'

export const receiveFriendships = friendships => ({
  type: RECEIVE_FRIENDSHIPS,
  friendships
}) 

export const removeFriendship = friendshipId => ({
  type: REMOVE_FRIENDSHIP,
  friendshipId
})

export const fetchFriendships = (userId) => dispatch => {
  return APIUtil.fetchFriendships(userId)
    .then((friendships) => dispatch(receiveFriendships(friendships)))
}

export const createFriendship = friendship => {
  return APIUtil.createFriendship(friendship)
  .then((friendships) => dispatch(receiveFriendships(friendships)))
}

export const deleteFriendship = friendshipId => dispatch => {
  return APIUtil.deleteFriendship(friendshipId)
    .then(() => dispatch(removeFriendship(friendshipId)))
}