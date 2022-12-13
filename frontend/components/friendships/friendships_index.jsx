import React from 'react'
import FriendshipItem from './friendship_item'
import Modal from 'react-modal/lib/components/Modal'
import { withRouter } from 'react-router-dom'

class FrienshipIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false, 
    }

    this.friendshipPreview = this.friendshipPreview.bind(this)
    this.noFriends = this.noFriends.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  componentDidMount() {
    // setTimeout(() => {
      this.props.fetchFriendships(this.props.user.id)
    // }, 500)
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  friendshipPreview() {
    let friendshipPreview = this.props.friendships.slice(0, 6);
    return friendshipPreview;
  }

  noFriends() {
    if (this.props.friendships.length === 0) {
      return (
        <div className='see-recommendations'>
          You currently have no friends, browse Recommended Friends below
        </div>
      )
    } 
  }

  viewFriendsButton() {
    if (this.props.friendships.length > 6) {
      return (
        <button className='view-all-friends' onClick={() => this.openModal()}> View all friends </button>
      )
    }
  }

  render() {
    return(
      <div className='friendships-container'>
        <div className='friendships-index-container'>
          <div className='friends-container'>
            <div className='friends'> Friends </div> 
            {this.viewFriendsButton()}
          </div>
        <p className='friends-number'>{this.props.friendships.length} friends </p>
        {this.noFriends()}
          <div className='friendships-index'>
            {
              this.friendshipPreview().map((friendship, idx) => <FriendshipItem
              key={idx}
              friendship={friendship}
              recommendedFriends={false}
              flag={false}
              user={this.props.user}
              forceProfileRender={this.props.forceProfileRender}
              fetchUser={this.props.fetchUser}
              />)
            }
          </div>
        </div>
        <Modal
         parentSelector = { () => document.body}
         isOpen={this.state.modalIsOpen}
         overlayClassName='modal-background'
         className='modal-child'
         onRequestClose={() => this.setState({modalIsOpen: false})}
        >
        <div className='modal-friends' >

        <div className='full-friendships-index-container'>
        <div className='friends'> Friends </div>
            <p className='friends-number'>{this.props.friendships.length} friends </p>
           <div className='friendships-index'>
            {
              this.props.friendships.map((friendship, idx) => <FriendshipItem
              key={idx}
              flag={true}
              recommendedFriends={false}
              friendship={friendship}
              user={this.props.user}
              forceProfileRender={this.props.forceProfileRender}
              fetchUser={this.props.fetchUser}
              deleteFriendship={this.props.deleteFriendship}
              />)
            }
          </div>
        </div>
        </div>
        </Modal>
      </div>
    )
  }
}

export default FrienshipIndex