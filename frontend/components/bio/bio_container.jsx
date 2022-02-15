import {connect} from 'react-redux';
import Bio from './bio'
import {updateUser, fetchUser, fetchCurrentUser} from '../../actions/users_actions'
import { createFriendRequest } from '../../actions/friend_request_actions'
import { fetchFriendRequests } from '../../actions/friend_request_actions';
import { fetchFriendships } from '../../actions/friendship_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    notifications: Object.values(state.session.currentUser.notifications),
    friendRequests: state.session.currentUser.notifications
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser:(user) => dispatch(fetchUser(user)),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchFriendships:(userId) => dispatch(fetchFriendships(userId)),
    fetchCurrentUser:(userId) => dispatch(fetchCurrentUser(userId)),
    createFriendRequest: (friendRequest) => dispatch(createFriendRequest(friendRequest))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bio)