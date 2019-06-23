
import { connect } from 'react-redux'
import TaskDetailDialog from '../components/TaskDetailDialog'
import { getItem, getLoading } from '../reducers/selectors'
import DateFnsUtils from '@date-io/date-fns'
import { getTasksDetailRequest, getTasksCommentsRequest, postTasksCommentsRequest } from '../actions/tasks'

export const mapStateToProps = (state, { match }) => {
  const task = getItem(state.tasks.data, parseInt(match.params.taskId))
  const DateFormatter = new DateFnsUtils()
  const tasksLoading = getLoading(state.tasks)
  return {
    title: task.title,
    assignee: task.assignee,
    term: task.term ? DateFormatter.format(new Date(task.term), 'd MMMM yyyy HH:mm:ss') : null,
    duration: task.duration,
    description: task.description,
    changes: task.changes,
    status: match.params.type,
    comments: task.comments || [],
    loading: tasksLoading('getTasksDetail'),
    commentsLoading: tasksLoading('getTasksComments'),
    postCommentLoading: tasksLoading('postTasksComments')
  }
}

export const mapDispatchToProps = (dispatch, { match }) => ({
  getTasksDetail: () => dispatch(getTasksDetailRequest({ id: match.params.taskId })),
  getTasksComments: () => dispatch(getTasksCommentsRequest({ id: match.params.taskId })),
  postTasksComments: (payload) => dispatch(postTasksCommentsRequest({ id: match.params.taskId }, payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailDialog)
