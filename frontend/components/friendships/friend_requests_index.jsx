import React from 'react';
import FriendRequestItemContainer from './friend_request_item_container';


class FriendRequestsIndex extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      key: 0
    }
  
    this.forceRender = this.forceRender.bind(this)
  }

  forceRender() {
    this.setState({key: this.state.key + 1})
  }

  render() {
    return(
      <div className='friend-requests-index-container'>
        <div>
          {
          this.props.friendRequests.map((friendRequest, idx) =>
          <FriendRequestItemContainer
          key={idx}
          friendRequest={friendRequest} 
          forceRender = {this.forceRender}
          />
          )
         }
      </div>
    </div>
      )
    }
  }

export default FriendRequestsIndex