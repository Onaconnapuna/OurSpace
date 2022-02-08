import React from 'react'
import FriendshipItem from './friendship_item'

class FrienshipIndex extends React.Component {
  constructor(props) {
    super(props)

    this.friendshipPreview = this.friendshipPreview.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.fetchFriendships(this.props.user.id)
    }, 500)
  }

  friendshipPreview() {
    let friendshipPreview = this.props.friendships.slice(0, 6);
    return friendshipPreview;
  }

  render() {
    return(
      <div className='friendships-container'>
        <div className='friendships-index-container'>
        <div className='friends'> Friends </div>
          <div className='friendships-index'>
            {
              this.friendshipPreview().map((friendship, idx) => <FriendshipItem
              key={idx}
              friendship={friendship}
              user={this.props.user}
              forceProfileRender={this.props.forceProfileRender}
              fetchUser={this.props.fetchUser}
              />)
            }
          </div>
        <button className='view-all-friends'> View all friends </button>
        </div>
      </div>
    )
  }
}

export default FrienshipIndex