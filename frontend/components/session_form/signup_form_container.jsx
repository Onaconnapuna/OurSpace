import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions';
import SessionForm from  './session_form';


const mapStateToProps = ( {errors, session} ) => {
  return {
    errors: errors.session,
    formType: 'signup',
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)).then(this.props.history.push(`main`)),
    demoForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)