import {connect} from 'react-redux';
import Bio from './bio'
import {updateUser} from '../../actions/users_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    // user: state.entities.users[ownProps.params.userId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bio)