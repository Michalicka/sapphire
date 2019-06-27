
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import AvatarWrap from '../base/AvatarWrap'
import CommentContainer from '../../containers/comments/CommentContainer'
import TaskDetailHistory from '../tasks/TaskDetailHistory'

const styles = theme => ({
  title: {
    flexGrow: 1
  },
  toolbar: {
    minHeight: 0
  },
  wrap: {
    textAlign: 'left'
  },
  profileText: {
    paddingLeft: theme.spacing.unit
  },
  item: {
    marginBottom: theme.spacing.unit * 2
  },
  content: {
    marginBottom: theme.spacing.unit * 4
  },
  loading: {
    textAlign: 'center'
  }
})

export const TaskDetailDialog = ({ title, description, handleClose, status, classes, loading, assignee, term, duration, commentsLoading, postCommentLoading, changes, comments, getTasksDetail, getTasksComments, postTasksComments }) => {
  useEffect(() => {
    getTasksDetail()
  }, [])

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      maxWidth="sm"
      scroll="body"
    >
      <DialogTitle>
        <Toolbar
          className={classes.toolbar}
          disableGutters
        >
          <div className={classes.title}>{title}</div>
          <Typography
            variant="body1"
            color="primary"
          >{status}</Typography>
        </Toolbar>
      </DialogTitle>
      <DialogContent className={classes.wrap}>
        {loading &&
          <div className={classes.loading}>
            <CircularProgress
              color="primary"
            />
          </div>
        }
        <div className={classes.content}>
          {assignee && assignee.name &&
            <div className={classes.item}>
              <Typography variant="h6">Assignee:</Typography>
              <Toolbar
                disableGutters
              >
                <AvatarWrap
                  initial={assignee.name.charAt(0).toUpperCase()}
                  avatar={assignee.avatar}
                />
                <Typography
                  variant="body1"
                  className={classes.profileText}
                >{assignee.name}</Typography>
              </Toolbar>
            </div>
          }
          {description &&
            <div className={classes.item}>
              <Typography variant="h6">Description:</Typography>
              <DialogContentText>{description}</DialogContentText>
            </div>
          }
          {term &&
            <div className={classes.item}>
              <Typography variant="h6">Term:</Typography>
              <DialogContentText>{term}</DialogContentText>
            </div>
          }
          {duration &&
            <div className={classes.item}>
              <Typography variant="h6">Duration:</Typography>
              <DialogContentText>{duration}</DialogContentText>
            </div>
          }
        </div>
        <div className={classes.content}>
          <Typography
            variant="h6"
          >Comments:</Typography>
          <CommentContainer
            list={comments}
            errors={{}}
            send={postTasksComments}
            loading={commentsLoading}
            sendLoading={postCommentLoading}
            getComments={getTasksComments}
            taskId={1}
          />
        </div>
        {changes && changes.length !== 0 &&
          <div className={classes.content}>
            <Typography
              variant="h6"
            >History:</Typography>
            <TaskDetailHistory
              list={changes}
            />
          </div>
        }
      </DialogContent>
    </Dialog >
  )
}

TaskDetailDialog.propTypes = {
  title: PropTypes.string,
  assignee: PropTypes.object,
  term: PropTypes.string,
  duration: PropTypes.string,
  classes: PropTypes.object.isRequired,
  status: PropTypes.string,
  comments: PropTypes.array.isRequired,
  description: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  commentsLoading: PropTypes.bool.isRequired,
  postCommentLoading: PropTypes.bool.isRequired,
  changes: PropTypes.array,
  getTasksDetail: PropTypes.func.isRequired,
  getTasksComments: PropTypes.func.isRequired,
  postTasksComments: PropTypes.func.isRequired
}

export default withStyles(styles)(TaskDetailDialog)
