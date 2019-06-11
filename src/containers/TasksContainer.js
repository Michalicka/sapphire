
import { connect } from 'react-redux'
import CardContainer from '../components/CardContainer'
import { getTasksRequest } from '../actions/tasks'
import { filterTasks } from '../reducers/selectors'

export const mapStateToProps = (state, { statusId }) => ({
  items: filterTasks(state.tasks.data, statusId),
  loading: state.tasks.loading.getTasks
})

export const mapDispatchToProps = (dispatch, { id }) => ({
  getItems: () => dispatch(getTasksRequest({ id })),
  options: []
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)
