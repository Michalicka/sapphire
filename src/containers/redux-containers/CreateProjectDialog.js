
import { connect } from 'react-redux'
import CreateProjectDialog from '../dialogs/CreateProjectDialog'
import { postProjectRequest, changeProjectsErrors } from '../../actions/projects'
import { changeModal } from '../../actions/modal'
import { getErrors, getLoading } from '../../reducers/selectors'

const postProjectsKey = 'postProjects'

export const mapStateToProps = state => {
  const projectsErrors = getErrors(state.projects)
  const projectsLoading = getLoading(state.projects)
  return {
    open: state.modal.createProject.show,
    errors: projectsErrors(postProjectsKey),
    loading: projectsLoading(postProjectsKey)
  }
}

export const mapDispatchToProps = dispatch => ({
  send: values => dispatch(postProjectRequest(values)),
  handleClose: () => dispatch(changeModal('createProject', { show: false })),
  changeErrors: () => dispatch(changeProjectsErrors(postProjectsKey)({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectDialog)
