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

    this.listen = this.props.history.listen((location, action) => {
      if(action === "POP" ) {
        this.forceProfileRender();
      } else if (action === "PUSH") {
        this.forceProfileRender();
      }
    });

    // this.listen();

    this.forceProfileRender = this.forceProfileRender.bind(this)
    this.backListener = this.backListener.bind(this)
  }

  componentDidMount() {  
    if (this.props.user == undefined) {
      setTimeout(() => {
        this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchCurrentUser(parseInt(this.props.currentUser.id))
      }, 500)
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) { 
      this.forceProfileRender();
    }
  }

  backListener() {
    this.props.history.listen()
  }

  componentWillUnmount() {
    this.listen(); 
    // this.props.fetchCurrentUser(this.props.currentUser)
  }

  forceProfileRender() {
    this.setState({
      key: this.state.key + 1
    })
    this.props.fetchUser(this.props.match.params.userId)
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
            <div className='bio-friends'>
              <BioContainer 
              user={this.props.user}
              forceProfileRender={this.forceProfileRender}
              currentUser={this.props.currentUser}
              />
              <FriendshipIndexContainer 
              user={this.props.user}
              forceProfileRender={this.forceProfileRender}
              />
            </div>
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

