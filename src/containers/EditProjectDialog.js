
import { connect } from 'react-redux'
import EditProjectDialog from '../components/EditProjectDialog'
import { putProjectsRequest, changeProjectsErrors } from '../actions/projects'
import { changeModal } from '../actions/modal'

export const mapStateToProps = state => {
  const project = state.projects.data.find(project => project.id === state.modal.editProject.id)
  return {
    id: state.modal.editProject.id,
    open: state.modal.editProject.show,
    errors: state.projects.errors,
    loading: state.projects.loading,
    initialValues: {
      name: project && project.name ? project.name : '',
      description: project && project.description ? project.description : ''
    }
  }
}

export const mapDispatchToProps = dispatch => ({
  send: (values, urlParams) => dispatch(putProjectsRequest(values, urlParams)),
  handleClose: () => dispatch(changeModal('editProject', { show: false })),
  changeErrors: () => dispatch(changeProjectsErrors({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectDialog)
