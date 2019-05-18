
import { connect } from 'react-redux'
import CardContainer from '../components/CardContainer'
import { getProjectsRequest } from '../actions/projects'

export const mapStateToProps = state => ({
  items: state.projects.data,
  loading: state.projects.loading
})

export const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getProjectsRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)
