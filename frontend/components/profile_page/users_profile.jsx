import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import PostItem from '../posts/post_item'

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

  // render() {
  //   return null
  // }

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
          <div className='posts-container'>
            <div className='bio-friends-photos'>
              Bio
            <div className='friends-list'>
              Friends List 
            </div>
          </div>
            <div className='posts'>
              {
                this.props.posts.map((post, idx) => <PostItem  key={idx} post={post} deletePost={this.props.deletePost}/> )
              }
            </div>
          </div>
      </div>
    )
    }
  }
}

export default UsersProfile

