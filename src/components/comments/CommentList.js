
import React from 'react'
import PropTypes from 'prop-types'
import CommentListItem from './CommentListItem'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  item: {
    marginBottom: theme.spacing.unit * 2
  }
})

const CommentList = ({ list, className, classes }) => {
  return (
    <div className={className}>
      {list.map(item => (
        <CommentListItem
          key={item.id}
          item={item}
          className={classes.item}
        />
      ))}
    </div>
  )
}

CommentList.propTypes = {
  list: PropTypes.array.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CommentList)
