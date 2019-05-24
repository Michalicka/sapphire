
import { connect } from 'react-redux'
import { changeUserErrors, putPasswordsRequest } from '../actions/user'
import { changeModal } from '../actions/modal'
import ChangePasswordDialog from '../components/ChangePasswordDialog'

export const mapStateToProps = state => ({
  open: state.modal === 'changePassword',
  errors: state.user.errors,
  loading: state.user.loading
})

export const mapDispatchToProps = dispatch => ({
  send: (values) => dispatch(putPasswordsRequest(values)),
  handleClose: () => dispatch(changeModal('')),
  changeErrors: () => dispatch(changeUserErrors({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordDialog)
