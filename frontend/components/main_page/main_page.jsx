import React from "react";
import PostItem from "../posts/post_item";
import NavBarContainer from "../nav_bar/nav_bar_container";

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return(
      <div>
        <NavBarContainer/>
        <div className='posts-container'>
        {
          this.props.posts.map((post, idx) => <PostItem key={idx} post={post} fetchUser={this.props.fetchUser} deletePost={this.props.deletePost}/> )
        }
        </div>
      </div>
    )
  }
}

export default MainPage