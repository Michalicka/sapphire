
import { connect } from 'react-redux'
import ProfileControllerContainer from '../base/ProfileControllerContainer'
import { deleteTokensRequest } from '../../actions/tokens'
import { changeModal } from '../../actions/modal'
import { getData } from '../../reducers/selectors'

export const mapStateToProps = state => {
  const profileData = getData(state.profile)
  return {
    initial: profileData('name').charAt(0).toUpperCase(),
    avatar: profileData('avatar')
  }
}

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(deleteTokensRequest()),
  editProfile: () => dispatch(changeModal('editProfile', { show: true })),
  changePassword: () => dispatch(changeModal('changePassword', { show: true })),
  changeAvatar: () => dispatch(changeModal('changeAvatar', { show: true }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileControllerContainer)
