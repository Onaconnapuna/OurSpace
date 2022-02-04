import { connect } from 'react-redux';
import FriendshipIndex from  './friendships_index'
import { fetchFriendships, deleteFriendship } from '../../actions/friendship_actions'

const mapStateToProps = state => ({
  friendships: Object.values(state.entities.friendships)
})

const mapDispatchToProps = dispatch => ({
  fetchFriendships: (userId) => dispatch(fetchFriendships(userId)),
  deleteFriendship: (friendshipId) => dispatch(deleteFriendship(friendshipId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendshipIndex)
