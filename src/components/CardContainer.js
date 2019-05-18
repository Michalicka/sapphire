
import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CardItem from './CardItem'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  loader: {
    textAlign: 'center'
  }
})

export class CardContainer extends React.Component {
  componentDidMount() {
    this.props.getItems()
  }

  render() {
    const { items, options, loading, classes } = this.props
    return (
      <Grid
        container
        spacing={16}
      >
        {
          loading && items.length === 0 &&
          <Grid
            item
            xs={12}
          >
            <div className={classes.loader}>
              <CircularProgress
                color="primary"
              />
            </div>
          </Grid>
        }
        {items.map(item => (
          <Grid
            key={item.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <CardItem
              item={item}
              options={options}
            />
          </Grid>
        ))}
      </Grid>
    )
  }
}

CardContainer.propTypes = {
  items: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired,
  getItems: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CardContainer)
