import React from 'react'
import Comment from '../comments/comments'

class PostItem extends React.Component{
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   if(this.props.post == undefined) {
  //     return null
  //   } else {
  //     this.props.fetchComments(this.props.post.id)
  //   }
  // }

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
          <button className='delete-post-button' onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</button>
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