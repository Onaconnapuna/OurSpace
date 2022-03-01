import React from 'react'
import Comment from '../comments/comments'
import { Link } from 'react-router-dom';

class PostItem extends React.Component{
  constructor(props) {
    super(props)

    this.container = React.createRef();

    this.state = {
      userId: this.props.currentUser.id, 
      postId: this.props.post.id,
      parentCommentId: null,
      body: '',
      dropDownIsOpen: false, 
    }
    this.handleDropDown = this.handleDropDown.bind(this)
    this.checkUser = this.checkUser.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onWall = this.onWall.bind(this)
    this.renderDate = this.renderDate.bind(this)
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  UNSAFE_componentWillReceiveProps(prevProps) {
    if (this.props.postId !== prevProps.post.id)
    this.setState({
      postId: this.props.post.id
    })
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
      this.setState({dropDownIsOpen: false}) 
    } else {
      this.setState({dropDownIsOpen: true})
    }
  }

  checkUser() {
    if(this.props.currentUser.id === this.props.post.posterId || this.props.currentUser === this.props.user) {
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

  update(field) {
    return (e) => 
    this.setState({
      [field]: e.currentTarget.value
    })
  }

  renderDate() {
   let date = new Date(this.props.post.createdAt)
   let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
   return date.toLocaleDateString("en-US", options)
  }

  onWall() {
    if (this.props.post.userId === this.props.post.posterId) {
      return ( 
        <div className='poster-id'> 
            <Link className='poster-id' to={`/profiles/${this.props.post.posterId}`}>
            <img src={`${this.props.post.poster.imageUrl}`}/>
            <div className='poster-name'>
              {this.props.post.poster.firstName} {this.props.post.poster.lastName}
            <p className='post-created-at-on-wall'>
              <i className="fa fa-clock-o" aria-hidden="true" style={{paddingRight: '5px'}}></i>
              {this.renderDate()}
            </p>
            </div> 
            </Link>
        </div>
      )
    } else {
      return (
        <div className='poster-id'>
          <Link to={`/profiles/${this.props.post.posterId}`}> <img src={`${this.props.post.poster.imageUrl}`}/></Link>
          <div>
            <div>
              <Link className='poster-name' to={`/profiles/${this.props.post.posterId}`}> {this.props.post.poster.firstName} {this.props.post.poster.lastName}</Link>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <Link className='poster-name' to={`/profiles/${this.props.post.userId}`}> {this.props.post.user.firstName} {this.props.post.user.lastName} </Link>
            <p className='post-created-at'>
              <i className="fa fa-clock-o" aria-hidden="true" style={{paddingRight: '5px'}}></i>
              {this.renderDate()}
            </p>
            </div>
          </div>
        </div>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.forceProfileRender();
    this.props.createComment(this.state)
  }

  render() {
    if (!this.state) {
      return null
    } else {
      return (
        <div className='post'>
          <div className='poster-id-container'>
          {this.onWall()}
          {this.checkUser()}
          </div>
          <div className='post-body'>
          {this.props.post.body}
          </div>
          <img className='post-photo' src={this.props.post.photoUrl}/>
          <div> 
          <div className='break'></div>
          <div className='comments-container'> Comments
            {this.props.post.comments.map((comment, idx) => 
              <Comment 
              posterId={this.props.post.posterId}
              currentUserId={this.props.currentUser.id}
              currentUser={this.props.currentUser}
              key={idx}
              comment={comment}
              deleteComment={this.props.deleteComment}
              forceProfileRender={this.props.forceProfileRender}
              />)
            }
          </div>
          <form className='comment-input'onSubmit={this.handleSubmit}>
            <img src={`${this.props.currentUser.profilePhoto.imageUrl}`}/>
            <input className='comment-body-input' value={this.state.body} placeholder="Write a Comment" onChange={this.update('body')}></input>
          </form>
          </div>
        </div>
      )
    }
  }
}
  
export default PostItem
