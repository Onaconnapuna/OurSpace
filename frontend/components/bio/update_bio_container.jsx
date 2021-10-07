import { connect } from 'react-redux';
import UpdateForm from './update_bio_form';
import { updateUser } from '../../actions/users_actions';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
  }
} 

const mapDispatchToProps = (dispatch) => {
  return{
    updateUser: (user) => dispatch(updateUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm)

