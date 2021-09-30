import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions';
import SessionForm from  './session_form';
import React from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = ( {errors} ) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Already a member? Log in instead</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)