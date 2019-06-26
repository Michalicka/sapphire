
import { connect } from 'react-redux'
import { changeUserErrors, postAvatarRequest } from '../actions/profile'
import { changeModal } from '../actions/modal'
import ChangeAvatarDialog from '../components/ChangeAvatarDialog'
import { getErrors, getLoading } from '../reducers/selectors'

const postAvatarsKey = 'postAvatars'

export const mapStateToProps = state => {
  const profileErrors = getErrors(state.profile)
  const profileLoading = getLoading(state.profile)
  return {
    open: state.modal.changeAvatar.show,
    errors: profileErrors(postAvatarsKey),
    loading: profileLoading(postAvatarsKey)
  }
}

export const mapDispatchToProps = dispatch => ({
  send: (values) => dispatch(postAvatarRequest(values)),
  handleClose: () => dispatch(changeModal('changeAvatar', { show: false })),
  changeErrors: () => dispatch(changeUserErrors(postAvatarsKey)({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAvatarDialog)
