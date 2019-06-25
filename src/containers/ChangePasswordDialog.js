
import { connect } from 'react-redux'
import { changeUserErrors, putPasswordsRequest } from '../actions/profile'
import { changeModal } from '../actions/modal'
import ChangePasswordDialog from '../components/ChangePasswordDialog'
import { getErrors, getLoading } from '../reducers/selectors'

const putPasswordsKey = 'putPasswords'

export const mapStateToProps = state => {
  const profileErrors = getErrors(state.profile)
  const profileLoading = getLoading(state.profile)
  return {
    open: state.modal.changePassword.show,
    errors: profileErrors(putPasswordsKey),
    loading: profileLoading(putPasswordsKey)
  }
}

export const mapDispatchToProps = dispatch => ({
  send: (values) => dispatch(putPasswordsRequest(values)),
  handleClose: () => dispatch(changeModal('changePassword', { show: false })),
  changeErrors: () => dispatch(changeUserErrors(putPasswordsKey)({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordDialog)
