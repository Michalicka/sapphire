
import { connect } from 'react-redux'
import { changeUserErrors, putPasswordsRequest } from '../actions/user'
import { changeModal } from '../actions/modal'
import ChangePasswordDialog from '../components/ChangePasswordDialog'

export const mapStateToProps = state => ({
  open: state.modal.changePassword.show,
  errors: state.user.errors,
  loading: state.user.loading
})

export const mapDispatchToProps = dispatch => ({
  send: (values) => dispatch(putPasswordsRequest(values)),
  handleClose: () => dispatch(changeModal('changePassword', { show: false })),
  changeErrors: () => dispatch(changeUserErrors({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordDialog)
