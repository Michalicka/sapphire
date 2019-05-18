
import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CardItem from './CardItem'

export class CardContainer extends React.Component {
  componentDidMount() {
    this.props.getItems()
  }

  render() {
    const { items, options } = this.props
    return (
      <Grid
        container
        spacing={16}
      >
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
  getItems: PropTypes.func.isRequired
}

export default CardContainer
