
import React from 'react'
import PropTypes from 'prop-types'
import AvatarWrap from '../base/AvatarWrap'
import { Toolbar, Paper, withStyles } from '@material-ui/core'
import classNames from 'classnames'

const styles = theme => ({
  toolbar: {
    justifyContent: 'flex-end',
    minHeight: 0,
    marginBottom: theme.spacing.unit
  },
  avatar: {
    flexShrink: 0,
    marginRight: theme.spacing.unit
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 0.5,
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit
  },
  myContent: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    maxWidth: '90%'
  }
})

const MessagesItem = ({ item, className, myId, classes }) => {
  const isMe = item.author.id === myId
  return (
    <div className={className}>
      <Toolbar
        className={classes.toolbar}
      >
        {!isMe &&
          <AvatarWrap
            avatar={item.author.avatar}
            initial={item.author.name.charAt(0).toUpperCase()}
            className={classes.avatar}
          />
        }
        <Paper className={classNames(classes.content, isMe ? classes.myContent : undefined)}>{item.content}</Paper>
      </Toolbar>
    </div>
  )
}

MessagesItem.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
  myId: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MessagesItem)
