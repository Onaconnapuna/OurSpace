import React from 'react'
import Comment from '../comments/comments'

class PostItem extends React.Component{
  constructor(props) {
    super(props)
  }

  //  

  render() {
    if (this.props.comments == null) {
      return null
    } else {
      return (
        <div className='post'>
          <div className='poster-id'>
            {this.props.firstName}, {this.props.lastName}
          </div>
          <div className='post-body'>
           {this.props.post.body}
          </div>
          <img src={this.props.post.photoUrl}/>
          <div>
          <button className='share-post-button'>Share</button>
          <button className='delete-post-button' onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</button>
          <button className='edit-post-button'>Edit Post</button>
          </div>
        </div>
      )
    }
  }
}
  
export default PostItem

 {/* <div className='comments-container'>
            {
              this.props.comments.map((comment, idx) => <Comment key={idx} comment={comment}/>)
            } */}
            // </div>