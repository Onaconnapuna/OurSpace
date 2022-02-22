import React from 'react'
import FriendshipItem from './friendship_item'
import Modal from 'react-modal/lib/components/Modal'
import { withRouter } from 'react-router-dom'

class FrienshipIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false 
    }

    this.friendshipPreview = this.friendshipPreview.bind(this)
    this.noFriends = this.noFriends.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.fetchFriendships(this.props.user.id)
    }, 500)
  }

  openModal() {
    this.setState({modalIsOpen: true})
    // console.log(this.state.modalIsOpen)
  }

  friendshipPreview() {
    let friendshipPreview = this.props.friendships.slice(0, 6);
    return friendshipPreview;
  }

  noFriends() {
    if (!this.props.friendships.length === 0) return <div> No Friends :(</div>
  }

  render() {
    return(
      <div className='friendships-container'>
        <div className='friendships-index-container'>
        <div className='friends'> Friends ({this.props.friendships.length}) </div>
        {this.noFriends()}
          <div className='friendships-index'>
            {
              this.friendshipPreview().map((friendship, idx) => <FriendshipItem
              key={idx}
              friendship={friendship}
              user={this.props.user}
              forceProfileRender={this.props.forceProfileRender}
              fetchUser={this.props.fetchUser}
              />)
            }
          </div>
        <button className='view-all-friends' onClick={() => this.openModal()}> View all friends </button>
        </div>
        <Modal
         parentSelector = { () => document.body}
         isOpen={this.state.modalIsOpen}
         overlayClassName='modal-background'
         className='modal-child'
         onRequestClose={() => this.setState({modalIsOpen: false})}
        >
        <div className='friendships-index-container'>
        <div className='friends'> Friends ({this.props.friendships.length}) </div>
           <div className='friendships-index'>
            {
              this.props.friendships.map((friendship, idx) => <FriendshipItem
              key={idx}
              friendship={friendship}
              user={this.props.user}
              forceProfileRender={this.props.forceProfileRender}
              fetchUser={this.props.fetchUser}
              />)
            }
          </div>
        </div>
        </Modal>
      </div>
    )
  }
}

export default FrienshipIndex