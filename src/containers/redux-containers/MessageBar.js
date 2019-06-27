
import { connect } from 'react-redux'
import MessageBar from '../../components/base/MessageBar'
import { changeMessagebarParam } from '../../actions/messagebar'

export const mapStateToProps = state => ({
  open: state.messagebar.open,
  variant: state.messagebar.variant,
  message: state.messagebar.message
})

export const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(changeMessagebarParam('open', false))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageBar)
