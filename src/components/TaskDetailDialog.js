
import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import AvatarWrap from './AvatarWrap'

const styles = theme => ({
  dialog: {
    minWidth: 320
  },
  field: {
    marginBottom: theme.spacing.unit * 2
  },
  loader: {
    textAlign: 'center',
    marginTop: theme.spacing.unit
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    minHeight: 0
  },
  content: {
    textAlign: 'left'
  },
  profileText: {
    paddingLeft: theme.spacing.unit
  },
  item: {
    marginBottom: theme.spacing.unit * 2
  }
})

export const TaskDetailDialog = ({ title, description, handleClose, status, classes, loading, assignee, initial, avatar, term, duration }) => {
  console.log({
    title,
    description
  })
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      maxWidth="md"
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
      <div className={classes.loader}>
        {loading &&
          <CircularProgress
            color="primary"
          />
        }

        <DialogContent className={classes.content}>
          {assignee &&
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
          <div className={classes.item}>
            <Typography variant="h6">Description:</Typography>
            <DialogContentText>{description}</DialogContentText>
          </div>
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
        </DialogContent>
      </div>
    </Dialog >
  )
}

TaskDetailDialog.propTypes = {
  title: PropTypes.string.isRequired,
  assignee: PropTypes.object.isRequired,
  term: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default withStyles(styles)(TaskDetailDialog)
