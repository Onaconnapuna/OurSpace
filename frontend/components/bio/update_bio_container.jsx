import { connect } from 'react-redux';
import UpdateForm from './update_bio_form';
import { updateUser, fetchUser } from '../../actions/users_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
  }
} 

const mapDispatchToProps = (dispatch) => {
  return{
    updateUser: (user) => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal()),
    fetchUser:(user) => dispatch(fetchUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm)

