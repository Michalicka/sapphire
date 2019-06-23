
import { connect } from 'react-redux'
import SearchContainerSyncState from '../components/SearchContainerSyncState'
import { getItem } from '../reducers/selectors'

export const mapStateToProps = (state) => {
  const { createTask, editTask } = state.modal
  const id = createTask.id || editTask.id
  const project = getItem(state.projects.data, id)
  return {
    loading: state.projects.loading,
    items: project.members || [],
    id: id
  }
}

export default connect(mapStateToProps)(SearchContainerSyncState)
