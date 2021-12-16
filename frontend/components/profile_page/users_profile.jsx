import React from 'react';
import PostContainer from '../posts/post_container';
import PostFormContainer from '../posts/post_form_container';
import PostsIndexContainer from '../posts/posts_index_container';
import BioContainer from '../bio/bio_container';
import ProfilePhotosContainer from '../profile_photos/profile_photos_container';
import Modal from '../modal/modal'


class UsersProfile extends React.Component {
  constructor(props) {
    super (props)

    this.state = {
      key: 1
    }

    this.forceProfileRender = this.forceProfileRender.bind(this)
  }

  componentDidMount() {
    if (this.props.user == undefined) {
      this.props.fetchUser(this.props.match.params.userId)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user && prevProps.user) {
      if (this.props.user.profilePhoto.imageUrl !== prevProps.user.profilePhoto.imageUrl) {
        this.props.fetchUser(this.props.match.params.userId)
      }
    }
  }

  forceProfileRender() {
    console.log('hello')
    this.forceUpdate()
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
        <div className='bio-posts-background'>
          <div className='bio-posts-container'>
              <BioContainer 
              user={this.props.user}
              forceProfileRender={this.forceProfileRender}
              />
              <div className='posts'>
              <PostFormContainer user={this.props.user}/>
              <PostsIndexContainer user={this.props.user}/>
              </div>
          </div>
        </div>
        </div>
    )
    }
  }
}

export default UsersProfile

