
import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CardItem from './CardItem'

export const CardContainer = ({ items, options }) => {
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

CardContainer.propTypes = {
  items: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired
}

export default CardContainer
