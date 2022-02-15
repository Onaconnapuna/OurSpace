export const fetchFriendRequests = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/friend_requests`
  })
}

export const createFriendRequest = friendRequest => {
  return $.ajax({
    url: '/api/friend_requests',
    method: 'POST',
    data: {friendRequest}
  })
}

export const deleteFriendRequest = friendRequestId => {
  return $.ajax({
    url: `/api/friend_requests/${friendRequestId}`,
    method: 'DELETE'
  })
}