import {connect} from 'react-redux';
import ProfilePhotos from './profile_photos';
import { fetchUser } from '../../actions/users_actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser:(user) => dispatch(fetchUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhotos)