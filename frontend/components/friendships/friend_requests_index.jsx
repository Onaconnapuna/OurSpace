import React from 'react';
import FriendRequestItemContainer from './friend_request_item_container';


class FriendRequestsIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    console.log(this.props.friendRequests)
  }

  render() {
    return(
      <div className='friend-requests-index-container'>
        <div> HELLLO
          {
            this.props.friendRequests.map((friendRequest, idx) =>
              <FriendRequestItemContainer
              key={idx}
              friendRequest={friendRequest} 
              />
            )
          }
        </div>
      </div>
    )
  }
}

export default FriendRequestsIndex