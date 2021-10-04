import React from "react";
import PostItem from "./post_item";
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
        {
          this.props.posts.map((post, idx) => <PostItem key={idx} post={post} deletePost={this.props.deletePost}/> )
        }
      </div>
    )
  }
}

export default MainPage