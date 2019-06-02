
import { connect } from 'react-redux'
import EditProjectMembersDialog from '../components/EditProjectMembersDialog'
import { putProjectMembersRequest, changeProjectsErrors, editProject } from '../actions/projects'
import { changeModal } from '../actions/modal'

export const mapStateToProps = state => ({
  open: state.modal.editProjectMembers.show,
  errors: state.projects.errors,
  loading: state.projects.loading,
  id: state.modal.editProjectMembers.id
})

export const mapDispatchToProps = dispatch => ({
  send: (values, urlParams) => dispatch(putProjectMembersRequest(urlParams, values)),
  handleClose: () => dispatch(changeModal('editProjectMembers', { show: false })),
  changeErrors: () => dispatch(changeProjectsErrors({})),
  changeProjectMembers: (id, members) => dispatch(editProject(id, { members }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectMembersDialog)
