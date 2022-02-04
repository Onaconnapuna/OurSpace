import { connect } from 'react-redux';
import FriendshipIndex from  './friendships_index'
import { fetchFriendships, deleteFriendship } from '../../actions/friendship_actions';
import { fetchUser } from '../../actions/users_actions'

const mapStateToProps = state => ({
  friendships: Object.values(state.entities.friendships)
})

const mapDispatchToProps = dispatch => ({
  fetchFriendships: (userId) => dispatch(fetchFriendships(userId)),
  deleteFriendship: (friendshipId) => dispatch(deleteFriendship(friendshipId)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendshipIndex)
