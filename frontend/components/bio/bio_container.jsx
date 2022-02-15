import {connect} from 'react-redux';
import Bio from './bio'
import {updateUser, fetchUser} from '../../actions/users_actions'
import { createFriendRequest } from '../../actions/friend_request_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    notifications: Object.values(state.entities.notifications)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser:(user) => dispatch(fetchUser(user)),
    updateUser: (user) => dispatch(updateUser(user)),
    createFriendRequest: (friendRequest) => dispatch(createFriendRequest(friendRequest))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bio)