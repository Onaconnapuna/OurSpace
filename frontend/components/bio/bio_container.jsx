import connect from 'react-redux';
import Bio from './bio'

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Bio)