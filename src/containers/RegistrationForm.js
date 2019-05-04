
import { connect } from 'react-redux'
import RegistrationForm from '../components/RegistrationForm'
import { userRegistration } from '../actions/user'

const mapStateToProps = state => ({
  userErrors: state.user.errors,
  loading: state.user.loading,
  registrationSuccess: state.user.data.registrationSuccess
})

const mapDispatchToProps = dispatch => ({
  registration: payload => dispatch(userRegistration(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
