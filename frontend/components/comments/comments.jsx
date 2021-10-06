import React from "react";

const Comment = (props) => {
  return(
    <div>
      {props.comment.body}
    </div>
  )
} 

export default Comment