
import { connect } from 'react-redux'
import SearchContainerSync from '../components/SearchContainerSync'
import { editTask } from '../actions/tasks'
import { getItem } from '../reducers/selectors'

export const mapStateToProps = (state, ownProps) => {
  const id = state.modal.createTask.id || state.modal.editTask.id
  const task = getItem(state.tasks.data, id)
  const project = getItem(state.projects.data, ownProps.id)
  return {
    loading: state.projects.loading,
    items: project.members || [],
    selectedItems: task.assignee ? [task.assignee] : [],
    id
  }
}

export const mapDispatchToProps = dispatch => ({
  changeSelectedItems: (id, assignee) => dispatch(editTask(id, { assignee }))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainerSync)
