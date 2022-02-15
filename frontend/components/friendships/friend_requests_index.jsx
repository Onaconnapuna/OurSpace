import React from 'react';
import FriendRequestItemContainer from './friend_request_item_container';


class FriendRequestsIndex extends React.Component {
  constructor(props){
    super(props)

    // this.tryingThis=this.tryingThis.bind(this)
  }

  // componentDidUpdate() {
  //   console.log('the component did update')
  // }

  // tryingThis(){
  //   this.props.fetchFriendRequests(this.props.currentUser.id)
  // }

  render() {
    return(
      <div className='friend-requests-index-container'>
        <div className='friend-requests'> Friend Requests </div>
        <div className='friend-requests-index'>
          {
          this.props.friendRequests.map((friendRequest, idx) =>
          <FriendRequestItemContainer
          key={idx}
          forceProfileRender={this.props.forceProfileRender}
          friendRequest={friendRequest} 
          tryingThis={this.tryingThis}
          forceNavUpdate={this.props.forceNavUpdate}
          renderButton={this.props.renderButton}
          />
          )
         }
      </div>
    </div>
      )
    }
  }

export default FriendRequestsIndex