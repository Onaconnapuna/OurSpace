import React from 'react'

class FriendRequestItem extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   userId: this.props.currentUser.id,
    //   friendId: this.props.friendRequest.userId,
      // accept: 'Accept',
      // deny: 'Deny',
      // disabled: false 
    // }

    // this.disabled = false

    this.handleAccept = this.handleAccept.bind(this);
    this.handleDeny = this.handleDeny.bind(this);
    // this.props.requestClose()
    // this.handleHelper = this.handleHelper.bind(this)
  }

  returnParams() {
    return {
      userId: this.props.currentUser.id,
      friendId: this.props.friendRequest.userId
    }
  }

  handleAccept() {

    this.props.createFriendship(this.returnParams())
    .then(this.props.deleteFriendRequest(this.props.friendRequest.id))
    // .then(this.props.forceRender())
  
    .then(this.props.forceProfileRender())
  }

  handleDeny() {

    this.props.deleteFriendRequest(this.props.friendRequest.id)
    // .then(this.props.requestClose())
    .then(this.props.forceProfileRender())
  }


  render() {
    return(
      <div className='friend-request-item-container'>
        <div className='friend-request-item'>
          <img className='create-post-poster-img' src={`${this.props.friendRequest.imageUrl}`} />
          <p>{this.props.friendRequest.firstName} {this.props.friendRequest.lastName} wants to be friends</p>
          <div className='friend-request-item-buttons'>
            <button className='accept' onClick={() => this.handleAccept()} > Accept </button>
            <button className='deny' onClick={() => this.handleDeny()} > Deny </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FriendRequestItem