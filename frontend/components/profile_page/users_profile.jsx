import React from 'react';
import PostContainer from '../posts/post_container';
import PostFormContainer from '../posts/post_form_container';
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
    this.props.fetchPosts(this.props.match.params.userId)
  }

  render() {
    if (this.props.user == undefined) {
      return null 
    } else {
      return (
      <div className='profile-page'>
        <div className='profile-photos-container'>
          <div className='profile-background-photo'>
          </div>
            <div className='profile-photo'>
            </div>
        </div>
        <div className='bio-posts-background'>
          <div className='bio-posts-container'>
              <BioContainer user={this.props.user}/>
            <div className='posts'>
                {/* <PostFormContainer userId={this.props.user.id}/> */}
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

