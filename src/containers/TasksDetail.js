
import { connect } from 'react-redux'
import TasksDetail from '../components/TasksDetail'

export const mapStateToProps = (state, ownProps) => {
  const project = state.projects.data.find(item => item.id === ownProps.id)
  return {
    title: project.title,
    description: project.description
  }
}

export default connect(mapStateToProps)(TasksDetail)
