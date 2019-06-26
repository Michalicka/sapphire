
import React from 'react'
import PropTypes from 'prop-types'
import AvatarWrap from '../base/AvatarWrap'
import { Typography, Paper, Toolbar, withStyles } from '@material-ui/core'

const styles = theme => ({
  name: {
    marginLeft: theme.spacing.unit
  },
  content: {
    padding: theme.spacing.unit,
    width: '90%',
    wordWrap: 'break-word'
  }
})

const CommentListItem = ({ item, className, classes }) => {
  const { author, content } = item
  return (
    <div className={className}>
      <Toolbar disableGutters>
        <AvatarWrap
          avatar={author.avatar}
          initial={author.name.charAt(0).toUpperCase()}
        />
        <Typography
          variant="body1"
          className={classes.name}
        >
          {author.name}
        </Typography>
      </Toolbar>
      <Paper className={classes.content}>
        {content}
      </Paper>
    </div>
  )
}

CommentListItem.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CommentListItem)
