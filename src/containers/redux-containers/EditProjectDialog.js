
import { connect } from 'react-redux'
import EditProjectDialog from '../dialogs/EditProjectDialog'
import { putProjectsRequest, changeProjectsErrors } from '../../actions/projects'
import { changeModal } from '../../actions/modal'
import { getItem, getErrors, getLoading } from '../../reducers/selectors'

const putProjectsKey = 'putProjects'

export const mapStateToProps = state => {
  const project = getItem(state.projects.data, state.modal.editProject.id)
  const projectsErrors = getErrors(state.projects)
  const projectsLoading = getLoading(state.projects)
  return {
    id: state.modal.editProject.id,
    open: state.modal.editProject.show,
    errors: projectsErrors(putProjectsKey),
    loading: projectsLoading(putProjectsKey),
    initialValues: {
      name: project.name ? project.name : '',
      description: project.description ? project.description : ''
    }
  }
}

export const mapDispatchToProps = dispatch => ({
  send: (values, urlParams) => dispatch(putProjectsRequest(values, urlParams)),
  handleClose: () => dispatch(changeModal('editProject', { show: false })),
  changeErrors: () => dispatch(changeProjectsErrors(putProjectsKey)({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectDialog)
