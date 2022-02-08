import { connect } from 'react-redux';
import FriendRequestItem from './friend_request_item';
import { createFriendship } from '../../actions/friendship_actions';
import { deleteFriendRequest } from '../../actions/friend_request_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  createFriendship: (friendship) => dispatch(createFriendship(friendship)),
  deleteFriendRequest: (friendRequestId) => dispatch(deleteFriendRequest(friendRequestId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestItem)