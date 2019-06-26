
import { connect } from 'react-redux'
import RegistrationForm from '../../components/base/RegistrationForm'
import { postUsersRequest } from '../../actions/profile'
import { getErrors, getLoading, getData } from '../../reducers/selectors'

const postUsersKey = 'postUsers'

export const mapStateToProps = state => {
  const profileErrors = getErrors(state.profile)
  const profileLoading = getLoading(state.profile)
  const profileData = getData(state.profile)
  return {
    userErrors: profileErrors(postUsersKey),
    loading: profileLoading(postUsersKey),
    registrationSuccess: profileData('registrationSuccess')
  }
}

export const mapDispatchToProps = dispatch => ({
  registration: payload => dispatch(postUsersRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
