
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { postTokensRequest } from '../actions/tokens'
import { getErrors, getLoading, getData } from '../reducers/selectors'

const postTokensKey = 'postTokens'

export const mapStateToProps = state => {
  const tokensErrors = getErrors(state.tokens)
  const tokensLoading = getLoading(state.tokens)
  const tokensData = getData(state.tokens)
  return {
    tokensErrors: tokensErrors(postTokensKey),
    loading: tokensLoading(postTokensKey),
    status: tokensData('status')
  }
}

export const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(postTokensRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
