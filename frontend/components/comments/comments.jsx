import React, { useState, useRef } from "react";
import { useEffect } from "react";

const Comment = (props) => {
    const [dropDown, setDropDown] = useState(false)
      const container = useRef(null)
      const handleClickOutside = (event) => {
        if (
          container.current &&
          !container.current.contains(event.target)
        ) {
          setDropDown(false)
        }
      };
    
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [])

      const handleDropdown = (dropDown) => {
        if (dropDown) {
          setDropDown(false)
        } else {
          setDropDown(true)
        }
      }

      const handleDelete = (commentId) => {
        props.deleteComment(commentId)
        props.forceProfileRender()
      }

      const helperComments = (props) => {
        if (props.currentUserId === props.posterId || props.currentUserId=== props.comment.userId) {
          return (
            <div className='ellipsis-button-background' ref={container}>
                <button className='ellipsis-button' onClick={() => handleDropdown(dropDown)}> &#8230; </button>
                  {dropDown && (
                    <div className="dropdown-post">
                  <button className="dropdown-item" onClick={() => handleDelete(props.comment.id)}> Delete Comment</button>
                  </div>
                  )}
              </div>
          )
        }
      }

  return(
    <div className="comment">
      <img src={`${props.comment.imageUrl}`}/>
      <p className="comment-body">{props.comment.body}</p>
      {helperComments(props)}
    </div>
  )
} 

export default Comment