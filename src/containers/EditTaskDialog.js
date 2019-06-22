
import { connect } from 'react-redux'
import EditTaskDialog from '../components/EditTaskDialog'
import { putTasksRequest, changeTasksErrors } from '../actions/tasks'
import { changeModal } from '../actions/modal'
import { getErrors, getLoading, getItem } from '../reducers/selectors'

const key = 'putTasks'
const modal = 'editTask'
export const mapStateToProps = state => {
  const task = getItem(state.tasks.data, state.modal[modal].taskId)
  return {
    open: state.modal[modal].show,
    id: state.modal[modal].id,
    errors: getErrors(state.tasks)(key),
    loading: getLoading(state.tasks)(key),
    taskId: state.modal[modal].taskId,
    initialValues: {
      title: task.title,
      term: task.term,
      assignee_id: task.assignee ? task.assignee.id : null,
      status_id: task.status ? task.status.id : null,
      description: task.description,
      duration: task.duration
    }
  }
}

export const mapDispatchToProps = dispatch => ({
  send: (urlParams, values) => dispatch(putTasksRequest(urlParams, values)),
  handleClose: () => dispatch(changeModal(modal, { show: false })),
  changeErrors: () => dispatch(changeTasksErrors(key)({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskDialog)
