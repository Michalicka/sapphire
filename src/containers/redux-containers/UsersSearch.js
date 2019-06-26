
import { connect } from 'react-redux'
import SearchContainer from '../fields/SearchContainer'
import { getUsersRequest } from '../../actions/users'

export const mapStateToProps = state => ({
  items: state.users.data
})

export const mapDispatchToProps = dispatch => ({
  search: name => dispatch(getUsersRequest(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
