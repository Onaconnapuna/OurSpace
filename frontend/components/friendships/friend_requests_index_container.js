import { connect } from 'react-redux';
import FriendRequestsIndex from './friend_requests_index'
import { deleteFriendRequest, fetchFriendRequests } from '../../actions/friend_request_actions';
import { createFriendship } from '../../actions/friendship_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  friendRequests: Object.values(state.session.currentUser.notifications)
})

const mapDispatchToProps = dispatch => ({
  fetchFriendRequests: (userId) => dispatch(fetchFriendRequests(userId)),
  deleteFriendRequest:(friendRequestId) => dispatch(deleteFriendRequest(friendRequestId)),
  createFriendship: (friendship) => dispatch(createFriendship(friendship))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestsIndex)