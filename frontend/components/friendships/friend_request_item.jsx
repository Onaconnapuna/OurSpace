import React from 'react'

class FriendRequestItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.currentUser.id,
      friendId: this.props.friendRequest.friendId,
      accept: 'Accept',
      deny: 'Deny',

      disabled: false 
    }

    this.handleAccept = this.handleAccept.bind(this);
    this.handleDeny = this.handleDeny.bind(this);
  }

  handleAccept() {
    this.props.createFriendship(this.state)
    .then(this.props.deleteFriendRequest(this.props.friendRequest.id))
    this.setState({
      accept: 'Accepted',
      disabled: true
      }) 
    
  }

  handleDeny() {
    this.props.deleteFriendRequest(this.props.friendRequest.id)
    this.setState({
      deny: 'Denied',
      disabled: true
    })
      // .then(this.props.forceRender())
      // .then(this.props.forceNavRender())
  }


  render() {
    return(
      <div className='friend-request-item-container'>
        <div className='friend-request-item'>
          <img className='create-post-poster-img' src={`${this.props.friendRequest.imageUrl}`} />
          <p>{this.props.friendRequest.firstName} {this.props.friendRequest.lastName} wants to be friends</p>
          <div className='friend-request-item-buttons'>
            <button className='accept' onClick={() => this.handleAccept()} disabled={this.state.disabled}> {this.state.accept} </button>
            <button className='deny' onClick={() => this.handleDeny()} disabled={this.state.disabled}> {this.state.deny} </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FriendRequestItem