
import { connect } from 'react-redux'
import ProfileController from '../components/ProfileController'
import { deleteTokensRequest } from '../actions/tokens'
import { changeModal } from '../actions/modal'

export const mapStateToProps = state => ({
  initial: state.user.data.name.charAt(0).toUpperCase(),
  avatar: state.user.data.avatar
})

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(deleteTokensRequest()),
  editProfile: () => dispatch(changeModal('editProfile'))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileController)
