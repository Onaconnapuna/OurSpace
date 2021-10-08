import React from 'react';
import PostContainer from '../posts/post_container';
import PostFormContainer from '../posts/post_form_container';
import BioContainer from '../bio/bio_container';
import Modal from '../modal/modal'


class UsersProfile extends React.Component {
  constructor(props) {
    super (props)

    this.editProfile = this.editProfile.bind(this)
  }

  componentDidMount() {
    if (this.props.user == undefined) {
      this.props.fetchUser(this.props.match.params.userId)
    }
    this.props.fetchPosts(this.props.match.params.userId)
  }

  editProfile() {
    if (this.props.user.id === window.currentUser.id) {
      return (
        <button onClick={ () => this.props.openModal('editProfile')}>Edit Profile</button>
      )
    }
  }

  render() {
    if (this.props.user == undefined) {
      return null 
    } else {
      return (
      <div className='profile-page'>
        
        <div className='profile-background-photo'>
            <div className='profile-photo'></div>
        </div>
  
            <h3>{this.props.user.firstName}, {this.props.user.lastName}</h3>
          <div>
            {this.editProfile()}
          </div>
          <div className='posts-background'>
          <div className='posts-bio-container'>
            <div className='bio-friends-photos'>
              <BioContainer user={this.props.user}/>
            <div className='friends-list'>
              Friends List 
            </div>
          </div>
            <div className='posts'>
              {/* <button onClick={() => this.props.openModal('createPost')}>Create Post</button> */}
                <PostFormContainer userId={this.props.user.id}/>
              {
                this.props.posts.reverse().map((post, idx) => <PostContainer 
                key={idx}
                post={post} 
                firstName={this.props.user.firstName}
                lastName={this.props.user.lastName}  /> )
              }
            </div>
          </div>
          </div>
      </div>
    )
    }
  }
}

export default UsersProfile

