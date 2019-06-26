
import { connect } from 'react-redux'
import CreateButton from '../../components/CreateButton'
import { changeModal } from '../../actions/modal'

export const mapDispatchToProps = dispatch => ({
  clickHandler: () => dispatch(changeModal('createProject', { show: true }))
})

export default connect(undefined, mapDispatchToProps)(CreateButton)
