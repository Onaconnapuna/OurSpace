import React from 'react'
import FriendshipItem from './friendship_item'
import Modal from 'react-modal'

class RecommendedFriends extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.viewRecommendedButton = this.viewRecommendedButton.bind(this)
  }

  componentDidMount() {
    // setTimeout(() => {
      this.props.fetchFriendships(this.props.currentUser.id)
    // }, 500)
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  viewRecommendedButton() {
    if (this.props.recommendedFriends.length > 6) {
      return (
        <button className='view-all-friends' onClick={() => this.openModal()}> View Recommendations </button>
      )
    }
  }

  render() {
    return (
      <div className='friendships-container'>
      <div className='friendships-index-container'>
      <div className='friends'> Recommended Friends </div>
        <div className='friendships-index'>
          {
            this.props.recommendedFriends.slice(0,6).map((friendship, idx) => <FriendshipItem
            key={idx}
            friendship={friendship}
            flag={false}
            recommendedFriends={true}
            // user={this.props.user}
            forceProfileRender={this.props.forceProfileRender}
            fetchUser={this.props.fetchUser}
            />)
          }
        </div>
        {this.viewRecommendedButton()}
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
        <div className='friends'> Friends ({this.props.friendships.length}) </div>
           <div className='friendships-index'>
            {
              this.props.recommendedFriends.map((friendship, idx) => <FriendshipItem
              key={idx}
              flag={true}
              friendship={friendship}
              recommendedFriends={true}
              // user={this.props.user}
              forceProfileRender={this.props.forceProfileRender}
              fetchUser={this.props.fetchUser}
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

export default RecommendedFriends