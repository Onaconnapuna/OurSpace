import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { fetchUser } from '../../actions/users_actions';
import { fetchFriendRequests } from '../../actions/friend_request_actions';
import { logout } from '../../actions/session_actions'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  // friendRequests: state.session.currentUser.notifications
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchFriendRequests: (userId) => dispatch(fetchFriendRequests(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);