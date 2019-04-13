
import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const Counter = ({ increment, decrement, count }) => {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={decrement}
        id="decrement-button"
      >-</Button>
      <Typography
        variant="h6"
        id="counter-text"
      >{count}</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={increment}
        id="increment-button"
      >+</Button>
    </div>
  )
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

export default Counter
