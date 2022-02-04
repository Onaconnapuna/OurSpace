import * as APIUtil from '../util/posts_api_util'; 

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const REMOVE_POSTS = 'REMOVE_POSTS'

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts 
})

// export const receivePost = post => ({
//   type: RECEIVE_POST,
//   post
// })

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
})

// export const receiveErrors = errors => ({
//   type: RECEIVE_SESSION_ERRORS, 
//   errors
// })

export const fetchPosts = (userId) => dispatch => {
  return APIUtil.fetchPosts(userId)
    .then((posts) => dispatch(receivePosts(posts)))
}

export const createPost = (post) => dispatch => 
{
  return APIUtil.createPost(post)
    // .then((post) => dispatch(receivePost(post)))
}

export const deletePost = (postId) => dispatch => {
  return APIUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
}