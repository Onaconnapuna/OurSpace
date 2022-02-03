export const fetchUser = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}`,
  })
}

export const updateUser = (user) => {
  console.log(user)
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: {user}, 
  })
}