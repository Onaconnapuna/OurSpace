import React from 'react';
import FriendRequestItemContainer from './friend_request_item_container';


class FriendRequestsIndex extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      key: 1
    }

    this.forceRender=this.forceRender.bind(this)
  }

  // tryingThis(){
  //   this.props.fetchFriendRequests(this.props.currentUser.id)
  // }

  forceRender() {
    this.setState({
      key: this.state.key + 1
    })
  }

  closeModal() {
    if (this.props.friendRequests.length === 0) {
      this.props.requestClose()
    }
  }

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
            // forceRender={this.forceRender}
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