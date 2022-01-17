import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { openModal } from '../../actions/modal_actions';

import { logout, login } from '../../actions/session_actions'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);