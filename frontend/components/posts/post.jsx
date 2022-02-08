import React from 'react'
import Comment from '../comments/comments'

class PostItem extends React.Component{
  constructor(props) {
    super(props)

    this.container = React.createRef();

    this.state = {
      dropDownIsOpen: false 
    }

    this.handleDropDown = this.handleDropDown.bind(this)
    this.checkUser = this.checkUser.bind(this)
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        dropDownIsOpen: false,
      });
    }
  };

  handleDropDown() {
    if (this.state.dropDownIsOpen) {
      this.setState({dropDownIsOpen: false }) 
    } else {
      this.setState({dropDownIsOpen: true})
    }
  }

  checkUser() {
    if(this.props.currentUser.id === this.props.post.posterId) {
      return (
        <div className='ellipsis-button-background' ref={this.container}>
          <button className='ellipsis-button' onClick={() => this.handleDropDown()}> &#8230; </button>
            {this.state.dropDownIsOpen && (
            <div className="dropdown-post">
            <button className="dropdown-item" onClick={() => this.props.deletePost(this.props.post.id)}> Delete Post </button>
            <button className="dropdown-item">Share Post</button>
            </div>
            )}
        </div>
      )
    }
  }

  render() {
    if (this.props.comments == null) {
      return null
    } else {
      return (
        <div className='post'>
          <div className='poster-id'>
            <img src={`${this.props.post.poster.imageUrl}`}/>
            <p className='poster-name'>
              {this.props.post.poster.firstName} {this.props.post.poster.lastName}
            </p>
            {this.checkUser()}
          </div>
          <div className='post-body'>
          {this.props.post.body}
          </div>
          <img className='post-photo' src={this.props.post.photoUrl}/>
          <div> 

          {/* <button className='share-post-button'>Share</button>
          <button className='delete-post-button' onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</button>
          <button className='edit-post-button'>Edit Post</button> */}
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