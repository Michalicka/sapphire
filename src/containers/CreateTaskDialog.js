
import { connect } from 'react-redux'
import CreateTaskDialog from '../components/CreateTaskDialog'
import { postTasksRequest, changeTasksErrors } from '../actions/tasks'
import { changeModal } from '../actions/modal'
import { getErrors, getLoading } from '../reducers/selectors'

export const mapStateToProps = state => {
  const key = 'postTasks'
  return {
    open: state.modal.createTask.show,
    id: state.modal.createTask.id,
    errors: getErrors(state.tasks)(key),
    loading: getLoading(state.tasks)(key)
  }
}

export const mapDispatchToProps = dispatch => ({
  send: (urlParams, values) => dispatch(postTasksRequest(urlParams, values)),
  handleClose: () => dispatch(changeModal('createTask', { show: false })),
  changeErrors: () => dispatch(changeTasksErrors('postTasks')({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskDialog)
