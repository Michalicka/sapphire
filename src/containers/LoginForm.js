
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { postTokensRequest } from '../actions/tokens'

export const mapStateToProps = state => ({
  tokensErrors: state.tokens.errors,
  loading: state.tokens.loading,
  status: state.tokens.status
})

export const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(postTokensRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
