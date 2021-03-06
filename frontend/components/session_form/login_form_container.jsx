import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { fetchFriendRequests } from '../../actions/friend_request_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = ( {errors,session} ) => {
  return {
    errors: errors.session,
    formType: 'login',
    currentUser: session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    demoForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    fetchFriendRequests: (userId) => dispatch(fetchFriendRequests(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
