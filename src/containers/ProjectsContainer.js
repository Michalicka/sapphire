
import { connect } from 'react-redux'
import CardContainer from '../components/CardContainer'
import { getProjectsRequest, deleteProjectsRequest } from '../actions/projects'
import { changeModal } from '../actions/modal'

export const mapStateToProps = state => ({
  items: state.projects.data,
  loading: state.projects.loading
})

export const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getProjectsRequest()),
  options: [
    {
      title: 'Edit',
      clickHandler: id => dispatch(changeModal('editProject', { show: true, id }))
    },
    {
      title: 'Delete',
      clickHandler: id => dispatch(deleteProjectsRequest({ id }))
    }
  ]
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)
