import React from 'react';
import PostItemContainer from './post_container';

class PostsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      key: 1,
      posts: null
    }

    this.togglePosts = this.togglePosts.bind(this)
  }

  togglePosts() {
    if (this.props.user) {
      return this.props.profilePosts
    } else {
      return this.props.mainPosts
    }
  }

  componentDidMount() {
    if(this.props.user) {
      this.props.fetchPosts(this.props.user.id)
    } else {
      this.props.fetchPosts(this.props.currentUser.id)
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    }
  }

  render() { 
      return(
        <div className='posts-index'>
          {
            this.togglePosts().reverse().map((post, idx) => <PostItemContainer
            key={idx}
            post={post} 
            user={this.props.user}
            forceProfileRender={this.props.forceProfileRender}
            currentUser={this.props.currentUser}
            />)
          }
        </div>
      ) 
    }
      }
  

export default PostsIndex