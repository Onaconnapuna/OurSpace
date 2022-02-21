import React from "react";
import PostContainer from "../posts/post_container";
import NavBarContainer from "../nav_bar/nav_bar_container";

class MainPage extends React.Component {
  constructor(props) {
    super(props)

    // this.listen = this.props.history.listen((location, action) => {
    //   if(action === "POP" ) {
    //     this.props.fetchCurrentUser(this.props.currentUser.id);
    //   } else if (action === "PUSH") {
    //     this.props.fetchCurrentUser(this.props.currentUser.id);
    //   }
    // });
  }

  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchCurrentUser(this.props.currentUser.id)

  }

  render() {    
    if (!this.props.currentUser) {
      return null
    } else {
      return( 
        <div className="nav-all">
          <NavBarContainer 
          currentUser={this.props.currentUser}
          friendRequests={this.props.friendRequests}
          // friendRequests={Object.values(this.props.currentUser.friendRequests)}
          />
        {/* <div className='main-page'>
          <div className='posts-container'>
          {
            this.props.posts.map((post, idx) => <PostContainer  key={idx} post={post} deletePost={this.props.deletePost}/> )
          }
          </div>
        </div> */}
        </div>
      )
    }
  }
}


export default MainPage