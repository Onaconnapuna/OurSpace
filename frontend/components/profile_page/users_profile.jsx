import React from 'react';
import PostFormContainer from '../posts/post_form_container';
import PostsIndexContainer from '../posts/posts_index_container';
import BioContainer from '../bio/bio_container';
import ProfilePhotosContainer from '../profile_photos/profile_photos_container';
import FriendshipIndexContainer from '../friendships/friendships_index_container';

class UsersProfile extends React.Component {
  constructor(props) {
    super (props)

    this.state = {
    key: 1
    }

    this.forceProfileRender = this.forceProfileRender.bind(this)
  }

  componentDidMount() {
    // if (this.props.user == undefined) {
      this.props.fetchUser(this.props.match.params.userId)
    // }
  }

  forceProfileRender() {
    this.props.fetchUser(this.props.match.params.userId)
    this.setState({
      key: this.state.key + 1
    })
  }

  render() {
    if (this.props.user == undefined) {
      return null 
    } else {
      return (
      <div className='profile-page'>
        <ProfilePhotosContainer
        key={this.state.key}
        user={this.props.user} 
        />
        <h3 className='profile-name'> {this.props.user.firstName} {this.props.user.lastName}</h3>
        <div className='bio-posts-background'>
          <div className='bio-posts-container'>
              <BioContainer 
              user={this.props.user}
              forceProfileRender={this.forceProfileRender}
              />
              <FriendshipIndexContainer 
              user={this.props.user}
              />
              <div className='posts'>
              <PostFormContainer 
              currentUser={this.props.currentUser}
              user={this.props.user}
              forceProfileRender={this.forceProfileRender}
              />
              <PostsIndexContainer
              forceProfileRender={this.forceProfileRender} 
              key={this.state.key}
              user={this.props.user}/>
              </div>
          </div>
        </div>
        </div>
    )
    }
  }
}

export default UsersProfile

