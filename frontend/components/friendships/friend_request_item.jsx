import React from 'react'

class FriendRequestItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: this.props.currentUser.id,
      friendId: this.props.friendRequest.userId,

      disabled: false 
    }

    this.disabled = false

    this.handleAccept = this.handleAccept.bind(this);
    this.handleDeny = this.handleDeny.bind(this);
  }

  // componentDidUpdate(prevState) {
  //   if (this.state.disabled !== prevState.disabled) {

  //   }
  // }

  handleAccept() {
    this.props.createFriendship(this.state)
    .then(this.props.deleteFriendRequest(this.props.friendRequest.id))
    // this.setState({
    //   accept: 'Accepted',
    //   disabled: true
    // })

    // this.props.tryingThis();
    // this.props.forceNavUpdate();
  }

  handleDeny() {
    this.props.deleteFriendRequest(this.props.friendRequest.id)
    // this.setState({
    //   deny: 'Denied',
    //   disabled: false
    // })
  
    // this.props.tryingThis();
    // this.props.forceNavUpdate();
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