
import { connect } from 'react-redux'
import TasksDetail from '../../components/tasks/TasksDetail'
import { getItem } from '../../reducers/selectors'

export const mapStateToProps = (state, ownProps) => ({
  title: getItem(state.projects.data, ownProps.id).name,
  description: getItem(state.projects.data, ownProps.id).description
})

export default connect(mapStateToProps)(TasksDetail)
