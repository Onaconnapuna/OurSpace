export const fetchPosts = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/posts`
  })
}

export const createPost = post => {
  return $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: { post }
  })
}

export const deletePost = postId => {
  return $.ajax({
    url: `/api/posts/${postId}`,
    method: 'DELETE',
  })
}