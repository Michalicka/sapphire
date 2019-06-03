
import { connect } from 'react-redux'
import Search from '../components/Search'
import { getUsersRequest, changeUsersData } from '../actions/users'
import { getProjectMembersRequest } from '../actions/projects'

export const mapStateToProps = state => {
  const project = state.projects.data.find(item => item.id === state.modal.editProjectMembers.id) || {}
  return {
    loading: state.projects.loading,
    items: state.users.data,
    selectedItems: project.members || [],
    id: project.id
  }
}

export const mapDispatchToProps = dispatch => ({
  getItems: id => dispatch(getProjectMembersRequest({ id })),
  getNewItems: name => dispatch(getUsersRequest(name)),
  changeItems: items => dispatch(changeUsersData(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
