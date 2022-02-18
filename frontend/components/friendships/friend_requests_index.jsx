import React from 'react';
import FriendRequestItemContainer from './friend_request_item_container';


class FriendRequestsIndex extends React.Component {
  constructor(props){
    super(props)

    // this.tryingThis=this.tryingThis.bind(this)
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.fetchFriendRequests(this.props.currentUser.id)
  //   }, 1000)
  // }

  // tryingThis(){
  //   this.props.fetchFriendRequests(this.props.currentUser.id)
  // }

  render() {
    if (this.props.friendRequests === undefined) {
      return null
    } 
    else {
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
            />
            )
           }
        </div>
      </div>
        )
        }
      }
    }

export default FriendRequestsIndex