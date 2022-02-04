import React from 'react'
import FriendshipItem from './friendship_item'

class FrienshipIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.fetchFriendships(this.props.user.id)
    }, 1500)
  }


  render() {
    return(
      <div className='friensdhips-index'>
        {
          this.props.friendships.map((friendship, idx) => <FriendshipItem
          key={idx}
          friendship={friendship}
          user={this.props.user}
          />)
        }
      </div>
    )
  }
}

export default FrienshipIndex