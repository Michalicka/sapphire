
import { connect } from 'react-redux'
import { changeUserErrors, postAvatarRequest } from '../actions/user'
import { changeModal } from '../actions/modal'
import ChangeAvatarDialog from '../components/ChangeAvatarDialog'

export const mapStateToProps = state => ({
  open: state.modal === 'changeAvatar',
  errors: state.user.errors,
  loading: state.user.loading
})

export const mapDispatchToProps = dispatch => ({
  send: (values) => dispatch(postAvatarRequest(values)),
  handleClose: () => dispatch(changeModal('')),
  changeErrors: () => dispatch(changeUserErrors({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAvatarDialog)
