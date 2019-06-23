
import { connect } from 'react-redux'
import CardContainer from '../components/CardContainer'
import { getTasksRequest } from '../actions/tasks'
import { filterTasks } from '../reducers/selectors'
import { changeModal } from '../actions/modal'

export const mapStateToProps = (state, { statusId }) => ({
  items: filterTasks(state.tasks.data, statusId),
  loading: state.tasks.loading.getTasks
})

export const mapDispatchToProps = (dispatch, { id }) => ({
  getItems: () => dispatch(getTasksRequest({ id })),
  options: [
    {
      title: 'Edit',
      clickHandler: taskId => dispatch(changeModal('editTask', { show: true, id: parseInt(id), taskId }))
    }
    // currently you can't delete task
    // {
    //   title: 'Delete',
    //   clickHandler: taskId => dispatch(deleteTasksRequest({ id: parseInt(id), taskId }))
    // }
  ]
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)
