import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions';
import SessionForm from  './session_form';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ( {errors} ) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login" className='navlink'>Already a member? Log in instead</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)