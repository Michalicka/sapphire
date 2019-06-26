
import { connect } from 'react-redux'
import SearchContainerSyncState from '../fields/SearchContainerSyncState'
import { getItem, getLoading } from '../../reducers/selectors'

export const mapStateToProps = (state) => {
  const { createTask, editTask } = state.modal
  const id = createTask.id || editTask.id
  const project = getItem(state.projects.data, id)
  return {
    loading: getLoading(state.projects)('getProjectsMembers'),
    items: project.members || [],
    id: id
  }
}

export default connect(mapStateToProps)(SearchContainerSyncState)
