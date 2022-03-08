import React from 'react'
import Comment from '../comments/comments'
import { Link } from 'react-router-dom';
import 'regenerator-runtime/runtime'

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
      liked: false
    }
    this.handleDropDown = this.handleDropDown.bind(this)
    this.checkUser = this.checkUser.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onWall = this.onWall.bind(this)
    this.renderDate = this.renderDate.bind(this)
    this.isLiked = this.isLiked.bind(this)
    this.renderLiked = this.renderLiked.bind(this)
    this.deleteLike = this.deleteLike.bind(this)
    this.like = this.like.bind(this)
    this.focus = this.focus.bind(this)
  }

  componentDidMount() {
    this.setLiked()
    document.addEventListener("mousedown", this.handleClickOutside);
    console.log(this.props)
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

  like() {
    this.setState({
      liked: true
    })
    this.props.createLike(this.state)
  }

  deleteLike() {
    this.setState({
      liked: false
    })
    let likeId = null 
    this.props.post.likes.forEach((like, i) => {
      if (like.userId === this.props.currentUser.id) {
        likeId = like.id
      } 
    })

    this.props.deleteLike(likeId)
  }

  isLiked() {
    let liked = false  
    this.props.post.likes.forEach((like, i) => {
      if (like.userId === this.props.currentUser.id) {
        liked = true
      } 
    })
    return liked
  }

  setLiked() {
    if (this.isLiked()) {
      this.setState({
        liked: true
      })
    }
  }

  renderLiked() {
    if (this.state.liked) {
      return (
        <button onClick = {() => this.deleteLike()}> <i className="fa fa-thumbs-o-up"  style={{fontSize: 24, color: 'rgb(32, 120, 244)' }}></i> Liked </button>
      )
    } else {
      return (
        <button onClick={() => this.like()}> <i className="fa fa-thumbs-o-up"  style={{fontSize: 24, color: '#65676B' }}></i> Like </button>
      )
    }
  }

  focus() {
    document.getElementsByClassName('comment-body-input')[this.props.idx].focus()
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
          <div className='like-comment'>
            {this.renderLiked()}
            <button  onClick={()=> this.focus()}> <i className="fa fa-comment-o" aria-hidden="true" style={{fontSize: 24, color: '#65676B' }}></i> Comment </button>
          </div>
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
            <input className='comment-body-input' value={this.state.body} placeholder="Write a comment..." onChange={this.update('body')} autoFocus></input>
          </form>
          </div>
        </div>
      )
    }
  }
}
  
export default PostItem
