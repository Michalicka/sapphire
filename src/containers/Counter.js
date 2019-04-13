
import Counter from '../components/Counter'
import { connect } from 'react-redux'
import actions from '../actions'

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(actions.counter.increment()),
  decrement: () => dispatch(actions.counter.decrement())
})

const mapStateToProps = state => ({
  count: state.count
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
