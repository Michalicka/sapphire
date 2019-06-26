
import { connect } from 'react-redux'
import CardContainer from '../../components/cards/CardContainer'
import { deleteProjectsRequest } from '../../actions/projects'
import { changeModal } from '../../actions/modal'
import { getLoading } from '../../reducers/selectors'

export const mapStateToProps = state => {
  const projectsLoading = getLoading(state.projects)
  return {
    items: state.projects.data,
    loading: projectsLoading('getProjects')
  }
}

export const mapDispatchToProps = dispatch => ({
  options: [
    {
      title: 'Edit',
      clickHandler: id => dispatch(changeModal('editProject', { show: true, id }))
    },
    {
      title: 'Change members',
      clickHandler: id => dispatch(changeModal('editProjectMembers', { show: true, id }))
    },
    {
      title: 'Delete',
      clickHandler: id => dispatch(deleteProjectsRequest({ id }))
    }
  ]
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)
