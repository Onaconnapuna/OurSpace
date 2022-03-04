import React from 'react';
import PostFormContainer from '../posts/post_form_container';
import PostsIndexContainer from '../posts/posts_index_container';
import BioContainer from '../bio/bio_container';
import ProfilePhotosContainer from '../profile_photos/profile_photos_container';
import FriendshipIndexContainer from '../friendships/friendships_index_container';
import RecommendedFriendsContainer from '../friendships/recommended-friends-container';
import NavBarContainer from '../nav_bar/nav_bar_container';

class UsersProfile extends React.Component {
  constructor(props) {
    super (props)

    this.state = {
    key: 1
    }

    // this.listen = this.props.history.listen((location, action) => {
    //   if(action === "POP" ) {
    //     this.forceProfileRender();
    //   } else if (action === "PUSH") {
    //     this.forceProfileRender();
    //   }
    // });

    this.renderRecommendedFriends = this.renderRecommendedFriends.bind(this)

    this.forceProfileRender = this.forceProfileRender.bind(this)
  }

  componentDidMount() {  
    this.props.fetchUser(this.props.match.params.userId)
    this.props.fetchCurrentUser(parseInt(this.props.currentUser.id))
    this.props.fetchFriendRequests(parseInt(this.props.currentUser.id))
    this.props.fetchFriendships(this.props.match.params.userId)
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) { 
      this.setState({
        key: this.state.key + 1
      })
      this.props.fetchUser(this.props.match.params.userId)
      this.props.fetchCurrentUser(parseInt(this.props.currentUser.id))
      this.props.fetchFriendRequests(parseInt(this.props.currentUser.id))
    }
  }

  renderRecommendedFriends() {
    if (this.props.user.id  === this.props.currentUser.id) {
      return (
        <RecommendedFriendsContainer 
        key={this.state.key + 4}
        user={this.props.user}
        forceProfileRender={this.forceProfileRender}
        />
      )
    }

  }
  // componentWillUnmount() {
    // this.setState = (state, callback) => {
    //   return;
    // }
  //   this.listen(); 
  // }

  async forceProfileRender() {
    let user = await this.props.fetchUser(this.props.match.params.userId)
    let currentUser = await this.props.fetchCurrentUser(this.props.currentUser.id)
    if (user && currentUser) {
      this.setState({
        key: this.state.key + 1
      })
    }
  }

  render() {
    if (this.props.user == undefined) {
      return null 
    } else {
      return (
        <div>
          <NavBarContainer
          currentUser = {this.props.currentUser}
          forceProfileRender = {this.forceProfileRender}
          friendRequests = {this.props.friendRequests}
           />
           <div className='profile-page'>
             <ProfilePhotosContainer
             key={this.state.key + 1}
             user={this.props.user} 
             />
             <div className='basic-user-info'>
              <div className='profile-name'> {this.props.user.firstName} {this.props.user.lastName}</div>
              <div className='num-friends'> {this.props.friends.length} Friends </div>
             </div>
             <div className='bio-posts-background'>
               <div className='bio-posts-container'>
                 <div className='bio-friends'>
                   <BioContainer 
                   key={this.state.key  + 2}
                   user={this.props.user}
                   forceProfileRender={this.forceProfileRender}
                   currentUser={this.props.currentUser}
                   friendRequests={this.props.friendRequests}
                   />
                   <FriendshipIndexContainer 
                   key={this.state.key + 3}
                   user={this.props.user}
                   forceProfileRender={this.forceProfileRender}
                   />
                  
                  {this.renderRecommendedFriends()}
                 </div>
                   <div className='posts'>
                   <PostFormContainer 
                   key={this.state.key + 5}
                   currentUser={this.props.currentUser}
                   user={this.props.user}
                   forceProfileRender={this.forceProfileRender}
                   />
                   <PostsIndexContainer
                   key={this.state.key + 6}
                   forceProfileRender={this.forceProfileRender} 
                   user={this.props.user}
                   currentUser={this.props.currentUser}
                   />
                   </div>
               </div>
             </div>
             </div>
        </div>
      )
    }
  }
}

export default UsersProfile

