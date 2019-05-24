
import { connect } from 'react-redux'
import { changeUserErrors, putUserRequest } from '../actions/user'
import { changeModal } from '../actions/modal'
import EditProfileDialog from '../components/EditProfileDialog'

export const mapStateToProps = state => ({
  open: state.modal === 'editProfile',
  errors: state.user.errors,
  loading: state.user.loading,
  id: state.user.data.id,
  initialValues: {
    name: state.user.data.name,
    email: state.user.data.email
  }
})

export const mapDispatchToProps = dispatch => ({
  send: (values, urlParams) => dispatch(putUserRequest(values, urlParams)),
  handleClose: () => dispatch(changeModal('')),
  changeErrors: () => dispatch(changeUserErrors({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileDialog)
