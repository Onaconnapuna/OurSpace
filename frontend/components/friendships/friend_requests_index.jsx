import React from 'react';
import FriendRequestItemContainer from './friend_request_item_container';


class FriendRequestsIndex extends React.Component {
  constructor(props){
    super(props)

    this.tryingThis=this.tryingThis.bind(this)
  }

  tryingThis() {
    console.log('this fired')
    console.log(this.props.currentUser.id)
    this.props.fetchFriendRequests(this.props.currentUser.id)
  }

  render() {
    return(
      <div className='friend-requests-index-container'>
        <div className='friend-requests'> Friend Requests </div>
        <div className='friend-requests-index'>
          {
          this.props.friendRequests.map((friendRequest, idx) =>
          <FriendRequestItemContainer
          key={idx}
          friendRequest={friendRequest} 
          tryingThis={this.tryingThis}
          />
          )
         }
      </div>
    </div>
      )
    }
  }

export default FriendRequestsIndex