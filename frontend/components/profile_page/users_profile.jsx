import React from 'react';
import PostContainer from '../posts/post_container';
import PostFormContainer from '../posts/post_form_container';
import PostsIndexContainer from '../posts/posts_index_container';
import BioContainer from '../bio/bio_container';
import Modal from '../modal/modal'


class UsersProfile extends React.Component {
  constructor(props) {
    super (props)
  }

  componentDidMount() {
    if (this.props.user == undefined) {
      this.props.fetchUser(this.props.match.params.userId)
    }
  }

  render() {
    if (this.props.user == undefined) {
      return null 
    } else {
      return (
      <div className='profile-page'>
        <div className='profile-photos-container'>
          <div className='profile-background-photo' style={{backgroundImage: `url(${this.props.user.backgroundPhoto.imageUrl})`}}>
        </div>
            <div className='profile-photo' style={{backgroundImage: `url(${this.props.user.profilePhoto.imageUrl})`}}></div>
        </div>
        <div className='bio-posts-background'>
          <div className='bio-posts-container'>
              <BioContainer user={this.props.user}/>

              <PostsIndexContainer user={this.props.user}/>
          </div>
        </div>
        </div>
    )
    }
  }
}

export default UsersProfile

