import React from "react";
import PostsIndexContainer from "../posts/posts_index_container";
import PostFormContainer from "../posts/post_form_container";
import NavBarContainer from "../nav_bar/nav_bar_container";
import RecomendedFriendsContainer from "../friendships/recommended-friends-container";

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

          <div className="main-page-components">
            <div className="main-page-recommendations">
              <RecomendedFriendsContainer 
              key={this.state.key + 1}
              // user={this.props.user}
              currentUser={this.props.currentUser}
              forceProfileRender={this.forceProfileRender}
              />
            </div>
          
            <div className="posts-container">
              <div className="posts">
                <PostFormContainer 
                key={this.state.key + 2}
                currentUser={this.props.currentUser}
                user={null}
                forceProfileRender={this.forceProfileRender}
                />

                <PostsIndexContainer
                currentUser={this.props.currentUser}
                user={null}
                forceProfileRender={this.forceProfileRender}
                key={this.state.key + 3}
                />
              </div>
            </div>
          
              <div className="other-projects-container">
                <div className="other-projects"> Other Projects I've worked on </div>
                <div className="other-projects-links">
                  <div className='chess-reference-container'>
                    <a className="chess-reference" href="https://onaconnapuna.github.io/chess_openings_reference/"> Chess Openings Reference  <img src="https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/chess_reference.PNG" alt="" /></a>
                  </div>
                  <div className="cut-above-container">
                    <a className='cut-above' href="https://pacific-sea-61217.herokuapp.com/#/"> Cut Above <img src="https://ourspace-fullstack-project-seeds.s3.us-east-2.amazonaws.com/cutAbove.PNG" alt="" /> </a>
                  </div>
                </div>
              </div>
          

          </div>
        </div>

      )
    }
  }
}


export default MainPage