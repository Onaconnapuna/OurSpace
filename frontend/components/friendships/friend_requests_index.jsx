import React from 'react';
import FriendRequestItemContainer from './friend_request_item_container';


class FriendRequestsIndex extends React.Component {
  constructor(props){
    super(props)

    // this.state = {
    //   key: 0
    // }
  
    this.forceRender = this.forceRender.bind(this)
  }

  forceRender() {
    this.forceUpdate
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
          forceRender = {this.forceRender}
          forceNavRender = {this.props.forceNavRender}
          />
          )
         }
      </div>
    </div>
      )
    }
  }

export default FriendRequestsIndex