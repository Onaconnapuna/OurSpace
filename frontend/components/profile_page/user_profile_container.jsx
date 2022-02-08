import { connect } from 'react-redux';
import { fetchUser } from '../../actions/users_actions';
import UsersProfile from './users_profile';
import { fetchCurrentUser} from '../../actions/users_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersProfile)