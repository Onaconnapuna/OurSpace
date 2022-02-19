import React from "react";

const Comment = (props) => {
  return(
    <div className="comment">
      <img src={`${props.comment.imageUrl}`}/>
      <p className="comment-body">{props.comment.body}</p>
    </div>
  )
} 

export default Comment