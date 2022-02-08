import React from 'react'

class FriendRequestItem extends React.Component {
  constructor(props) {
    super(props)

    console.log(this.props)

    this.state = {
      userId: this.props.currentUser.id,
      friendId: this.props.friendRequest.id
    }
  }

  render() {
    return(
      <div className='friend-request_item-container'>
        <div className='friend-request-item'>
          <img className='create-post-poster-img' src={`${this.props.friendRequest.imageUrl}`} />
          <p>{this.props.friendRequest.firstName} {this.props.friendRequest.lastName} wants to be friends</p>
          <button onClick={() => this.props.createFriendship(this.state).then(this.props.deleteFriendRequest(this.props.friendRequest.id))}> Accept </button>
          <button onClick={() => this.props.deleteFriendRequest(this.props.friendRequest.id)}> Deny </button>
        </div>
      </div>
    )
  }
}

export default FriendRequestItem