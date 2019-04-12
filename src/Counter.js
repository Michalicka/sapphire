
import React from 'react'
import { increment, decrement } from './actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const Counter = ({ increment, decrement, count }) => {
  return (
    <div>
      <button onClick={decrement} id="decrement-button">-</button>
      <span id="count-span">{count}</span>
      <button onClick={increment} id="increment-button">+</button>
    </div>
  )
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
