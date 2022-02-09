import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions';
import SessionForm from  './session_form';
import { fetchFriendRequests } from '../../actions/friend_request_actions';

const mapStateToProps = ( {errors, session} ) => {
  return {
    errors: errors.session,
    formType: 'signup',
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    fetchFriendRequests: (userId) => dispatch(fetchFriendRequests(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)