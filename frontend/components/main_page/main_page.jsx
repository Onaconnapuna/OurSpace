import React from "react";
import PostContainer from "../posts/post_container";

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return(
      <div className='main-page'>
        <div className='posts-container'>
        {
          this.props.posts.map((post, idx) => <PostContainer  key={idx} post={post} deletePost={this.props.deletePost}/> )
        }
        </div>
      </div>
    )
  }
}


export default MainPage