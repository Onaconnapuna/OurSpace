import React from "react";
import PostsIndexContainer from "../posts/posts_index_container";
import PostFormContainer from "../posts/post_form_container";
import NavBarContainer from "../nav_bar/nav_bar_container";

class MainPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      key: 1
    }

    // this.listen = this.props.history.listen((location, action) => {
    //   if(action === "POP" ) {
    //     this.props.fetchCurrentUser(this.props.currentUser.id);
    //   } else if (action === "PUSH") {
    //     this.props.fetchCurrentUser(this.props.currentUser.id);
    //   }
    // });
    this.forceProfileRender = this.forceProfileRender.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0,0)
    this.props.fetchCurrentUser(this.props.currentUser.id)
    this.props.fetchFriendRequests(parseInt(this.props.currentUser.id))
  }

  forceProfileRender() {
    this.setState({
      key: this.state.key + 1
    })
    this.props.fetchCurrentUser(this.props.currentUser.id)
    this.props.fetchPosts(this.props.currentUser.id)
    this.props.fetchFriendRequests(parseInt(this.props.currentUser.id))
}


  render() {    
    if (!this.props.currentUser) {
      return null
    } else {
      return( 
        <div className="main-page">
          <div className="nav-main">

          <NavBarContainer 
          currentUser={this.props.currentUser}
          friendRequests={this.props.friendRequests}
          />
          </div>
    
        <div className="posts-container">
          <div className="posts">
            <PostFormContainer 
            key={this.state.key + 4}
            currentUser={this.props.currentUser}
            user={null}
            forceProfileRender={this.forceProfileRender}
            />

            <PostsIndexContainer
            currentUser={this.props.currentUser}
            user={null}
            forceProfileRender={this.forceProfileRender}
            key={this.state.key + 1}
            />
          </div>
        </div>
        </div>

      )
    }
  }
}


export default MainPage