
import { connect } from 'react-redux'
import ProfileController from '../components/ProfileController'
import { deleteTokensRequest } from '../actions/tokens'

export const mapStateToProps = state => ({
  initial: state.user.data.name.charAt(0).toUpperCase(),
  avatar: state.user.data.avatar
})

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(deleteTokensRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileController)
