import {connect} from 'react-redux';
import Bio from './bio'
import {updateUser, fetchUser} from '../../actions/users_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser:(user) => dispatch(fetchUser(user)),
    updateUser: (user) => dispatch(updateUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bio)