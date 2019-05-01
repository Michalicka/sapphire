
import { connect } from 'react-redux'
import MessageBar from '../components/MessageBar'
import { changeMessagebarData } from '../actions/messagebar'

const mapStateToProps = state => ({
  open: state.messagebar.open,
  variant: state.messagebar.variant,
  message: state.messagebar.message
})

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(changeMessagebarData({ open: false, message: '', variant: 'info' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageBar)
