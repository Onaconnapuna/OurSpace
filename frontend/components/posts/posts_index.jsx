import React from 'react';
import PostItemContainer from './post_container';

class PostsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.fetchPosts(this.props.user.id)
    }, 1000);
  }

  render() {
    return(
      <div className='posts-index'>
        {
          this.props.posts.reverse().map((post, idx) => <PostItemContainer
          key={idx}
          post={post} 
          user={this.props.user}
          />)
        }
      </div>
    )
  }
}

export default PostsIndex