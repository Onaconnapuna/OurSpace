export const fetchFriendships = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/friendships`
  })
}

export const createFriendship = friendship => {
  return $.ajax({
    url: '/api/friendships',
    method: 'POST',
    data: { friendship }
  })
}

export const deleteFriendship = friendshipId => {
  return $.ajax({
    url: `/api/friendships/${friendshipId}`,
    method: 'DElETE'
  })
}