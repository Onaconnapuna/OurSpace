import React from 'react'

const PostItem = (props) => {
  return (
    <div>
      {props.post.body}
      <button onClick={() => props.deletePost(props.post.id)}></button>
    </div>
  )
}

export default PostItem