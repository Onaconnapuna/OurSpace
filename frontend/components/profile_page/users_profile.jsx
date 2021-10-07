import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PostContainer from '../posts/post_container';
import PostFormContainer from '../posts/post_form_container';
import BioContainer from '../bio/bio_container';

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
        <NavBarContainer/>
          <div className='profile-background-photo'>
        <h1>{this.props.user.firstName}, {this.props.user.lastName}</h1>
            <div>Profile Photo 
            </div>
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

