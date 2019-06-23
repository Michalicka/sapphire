
import { connect } from 'react-redux'
import CreateTaskDialog from '../components/CreateTaskDialog'
import { postTasksRequest, changeTasksErrors } from '../actions/tasks'
import { changeModal } from '../actions/modal'
import { getErrors, getLoading } from '../reducers/selectors'

const key = 'postTasks'
const modal = 'createTask'
export const mapStateToProps = state => ({
  open: state.modal[modal].show,
  id: state.modal[modal].id,
  errors: getErrors(state.tasks)(key),
  loading: getLoading(state.tasks)(key)
})

export const mapDispatchToProps = dispatch => ({
  send: (urlParams, values) => dispatch(postTasksRequest(urlParams, values)),
  handleClose: () => dispatch(changeModal(modal, { show: false })),
  changeErrors: () => dispatch(changeTasksErrors(key)({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskDialog)
