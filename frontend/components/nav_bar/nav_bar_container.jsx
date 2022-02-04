import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { fetchUser } from '../../actions/users_actions';

import { logout, login } from '../../actions/session_actions'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);