import React from 'react';
import PostItemContainer from './post_container';

class PostsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      key: 1
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.fetchPosts(this.props.user.id)
    }, 500);
  }

  componentDidUpdate(prevProps) {
    if (this.props.posts !== prevProps.posts) {
      this.setState({key: this.state.key + 1})
    }
    // this.props.fetchPosts(this.props.user.id)
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
          this.props.posts.reverse().map((post, idx) => <PostItemContainer
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