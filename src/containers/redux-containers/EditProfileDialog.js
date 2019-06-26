
import { connect } from 'react-redux'
import { changeUserErrors, putUserRequest } from '../../actions/profile'
import { changeModal } from '../../actions/modal'
import EditProfileDialog from '../../components/EditProfileDialog'
import { getErrors, getLoading, getData } from '../../reducers/selectors'

const putUsersKey = 'putUsers'

export const mapStateToProps = state => {
  const profileErrors = getErrors(state.profile)
  const profileLoading = getLoading(state.profile)
  const profileData = getData(state.profile)
  return {
    open: state.modal.editProfile.show,
    errors: profileErrors(putUsersKey),
    loading: profileLoading(putUsersKey),
    id: profileData('id'),
    initialValues: {
      name: profileData('name'),
      email: profileData('email')
    }
  }
}

export const mapDispatchToProps = dispatch => ({
  send: (values, urlParams) => dispatch(putUserRequest(values, urlParams)),
  handleClose: () => dispatch(changeModal('editProfile', { show: false })),
  changeErrors: () => dispatch(changeUserErrors(putUsersKey)({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileDialog)
