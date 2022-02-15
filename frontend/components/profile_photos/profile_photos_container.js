import {connect} from 'react-redux';
import ProfilePhotos from './profile_photos';
import { fetchCurrentUser, fetchUser } from '../../actions/users_actions'

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser:(user) => dispatch(fetchUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhotos)