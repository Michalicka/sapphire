
import { connect } from 'react-redux'
import EditProjectMembersDialog from '../components/EditProjectMembersDialog'
import { putProjectMembersRequest, changeProjectsErrors, editProject } from '../actions/projects'
import { changeModal } from '../actions/modal'
import { getErrors, getLoading } from '../reducers/selectors'

const putProjectsMembersKey = 'putProjectsMembers'

export const mapStateToProps = state => {
  const projectsErrors = getErrors(state.projects)
  const projectsLoading = getLoading(state.projects)
  return {
    open: state.modal.editProjectMembers.show,
    id: state.modal.editProjectMembers.id,
    errors: projectsErrors(putProjectsMembersKey),
    loading: projectsLoading(putProjectsMembersKey)
  }
}

export const mapDispatchToProps = dispatch => ({
  send: (values, urlParams) => dispatch(putProjectMembersRequest(urlParams, values)),
  handleClose: () => dispatch(changeModal('editProjectMembers', { show: false })),
  changeErrors: () => dispatch(changeProjectsErrors(putProjectsMembersKey)({})),
  changeProjectMembers: (id, members) => dispatch(editProject(id, { members }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectMembersDialog)
