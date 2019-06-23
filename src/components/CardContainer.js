
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
    const { getItems } = this.props
    if (getItems !== undefined) {
      getItems()
    }
  }

  render() {
    const { items, loading, classes, options, baseUrl, urlSelector } = this.props
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
              baseUrl={baseUrl}
              urlSelector={urlSelector}
            />
          </Grid>
        ))}
      </Grid>
    )
  }
}

CardContainer.propTypes = {
  items: PropTypes.array.isRequired,
  getItems: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  baseUrl: PropTypes.string.isRequired,
  urlSelector: PropTypes.string
}

export default withStyles(styles)(CardContainer)
