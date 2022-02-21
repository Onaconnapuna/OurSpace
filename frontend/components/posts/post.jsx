import React from 'react'
import Comment from '../comments/comments'
import { Link } from 'react-router-dom';

class PostItem extends React.Component{
  constructor(props) {
    super(props)

    this.container = React.createRef();

    this.state = {
      userId: this.props.user.id, 
      postId: this.props.post.id,
      parentCommentId: null,
      body: '',
      dropDownIsOpen: false, 
    }

    this.handleDropDown = this.handleDropDown.bind(this)
    this.checkUser = this.checkUser.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillReceiveProps(prevProps) {
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
      this.setState({dropDownIsOpen: false }) 
    } else {
      this.setState({dropDownIsOpen: true})
    }
  }

  checkUser() {
    if(this.props.currentUser.id === this.props.post.posterId || this.props.currentUser.id === this.props.user.id) {
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
      [field]: e.currentTarget.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.forceProfileRender()
    this.props.forceProfileRender();
    // this.props.forceIndexReload()
    // setTimeout(() => {
    //   this.props.createComment(this.state)
    // },1000)
    this.props.createComment(this.state)
    // console.log(this.state)
    // this.props.createComment(this.state)
    // this.props.forceProfileRender();
    // this.setState({
    //   body: ''
    // })
  }

  render() {
    if (!this.state) {
      return null
    } else {
      return (
        <div className='post'>
          <div className='poster-id-container'>
            <div className='poster-id'> 
            <Link className='poster-id' to={`profiles/${this.props.post.poster.id}`}>
            <img src={`${this.props.post.poster.imageUrl}`}/>
            <p className='poster-name'>
              {this.props.post.poster.firstName} {this.props.post.poster.lastName}
            </p>
            </Link>
          </div>
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
              key={idx}
              comment={comment}
              deleteComment={this.props.deleteComment}
              forceProfileRender={this.props.forceProfileRender}
              />)
            }
          </div>
          <form className='comment-input'onSubmit={this.handleSubmit}>
            <img src={`${this.props.currentUser.profilePhoto.imageUrl}`}/>
            <input onClick={()=> console.log(this.state.postId)}className='comment-body-input' value={this.state.body} placeholder="Write a Comment" onChange={this.update('body')}></input>
            <button className='post-comment' disabled={!this.state.body}> Post Comment </button>
          </form>
          </div>
        </div>
      )
    }
  }
}
  
export default PostItem
