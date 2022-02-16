import React from 'react'

class FriendRequestItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.currentUser.id,
      friendId: this.props.friendRequest.userId,
      accept: 'Accept',
      deny: 'Deny',
      disabled: false 
    }

    this.disabled = false

    this.handleAccept = this.handleAccept.bind(this);
    this.handleDeny = this.handleDeny.bind(this);
    this.handleAcceptHelper = this.handleAcceptHelper.bind(this)
  }

  handleAcceptHelper() {
    if (this.props.forceProfileRender) {
      this.props.forceProfileRender();
    }
  }


  handleAccept() {
    this.setState({
      disabled: true,
      accept: 'Accepted'
    })
    this.props.createFriendship(this.state)
    .then(this.props.deleteFriendRequest(this.props.friendRequest.id))
    .then(this.handleAcceptHelper())
    // .then(this.props.fetchCurrentUser(this.props.currentUser.id))
    // this.props.fetchFriendships(this.state.userId)

    // this.props.renderButton()
    // this.props.fetchUser(this.props.friendRequest.userId)
  }

  handleDeny() {
    this.setState({
      disabled: true,
      deny: 'Denied'
    })
    this.props.deleteFriendRequest(this.props.friendRequest.id)
  }


  render() {
    return(
      <div className='friend-request-item-container'>
        <div className='friend-request-item'>
          <img className='create-post-poster-img' src={`${this.props.friendRequest.imageUrl}`} />
          <p>{this.props.friendRequest.firstName} {this.props.friendRequest.lastName} wants to be friends</p>
          <div className='friend-request-item-buttons'>
            <button className='accept' onClick={() => this.handleAccept()} > {this.state.accept} </button>
            <button className='deny' onClick={() => this.handleDeny()} > {this.state.deny} </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FriendRequestItem