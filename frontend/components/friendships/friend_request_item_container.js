import { connect } from 'react-redux';
import FriendRequestItem from './friend_request_item';
import { createFriendship } from '../../actions/friendship_actions';
import { deleteFriendRequest } from '../../actions/friend_request_actions';
import { fetchFriendRequests } from '../../actions/friend_request_actions';
import { fetchCurrentUser } from '../../actions/users_actions';
import { fetchFriendships } from '../../actions/friendship_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  createFriendship: (friendship) => dispatch(createFriendship(friendship)),
  fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  fetchFriendships: (userId) => dispatch(fetchFriendships(userId)),
  fetchFriendRequests: (userId) => dispatch(fetchFriendRequests(userId)),
  deleteFriendRequest: (friendRequestId) => dispatch(deleteFriendRequest(friendRequestId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestItem)