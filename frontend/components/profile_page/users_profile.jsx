import React from 'react';
import PostContainer from '../posts/post_container';
import PostFormContainer from '../posts/post_form_container';
import PostsIndexContainer from '../posts/posts_index_container';
import BioContainer from '../bio/bio_container';
import Modal from '../modal/modal'


class UsersProfile extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      profilePhoto: null,
      profilePhotoHash: null,
      backgroundPhoto: null,
      backgroundPhotoHash: null
    }
    this.updateBackgroundPhoto = this.updateBackgroundPhoto.bind(this)
    this.updateProfilePhoto = this.updateProfilePhoto.bind(this)
  }

  componentDidMount() {
    if (this.props.user == undefined) {
      this.props.fetchUser(this.props.match.params.userId)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user == undefined || prevProps.user.profilePhoto.imageUrl !== this.props.user.profilePhoto.imageUrl) {
        this.props.fetchUser(this.props.match.params.userId).then(
        this.setState({
          profilePhoto: this.props.user.profilePhoto.imageUrl,
          profilePhotoHash : Date.now(),
          backgroundPhoto: this.props.user.backgroundPhoto.imageUrl,
          backgroundPhotoHash: Date.now()
        })
      )
    }
  }

  updateProfilePhoto(file) {
    this.setState({profilePhoto: file})
  }

  updateBackgroundPhoto(file) {
    this.setState({backgroundPhoto: file})
  }

  render() {
    console.log(this.props.user)
    if (this.props.user == undefined) {
      return null 
    } else {
      return (
      <div className='profile-page'>
        <div className='profile-photos-container'>
          <div className='profile-background-photo' style={{backgroundImage: `url(${this.state.backgroundPhoto}?${this.state.backgroundPhotoHash})`}}>
        </div>
            <div className='profile-photo' style={{backgroundImage: `url(${this.state.profilePhoto}?${this.state.profilePhotoHash})`}}></div>
        </div>
        <div className='bio-posts-background'>
          <div className='bio-posts-container'>
              <BioContainer 
              user={this.props.user}
              updateBackgroundPhoto={this.updateBackgroundPhoto}
              updateProfilePhoto={this.updateProfilePhoto}
              />

              <PostsIndexContainer user={this.props.user}/>
          </div>
        </div>
        </div>
    )
    }
  }
}

export default UsersProfile

