
import { connect } from 'react-redux'
import CreateButton from '../../components/base/CreateButton'
import { changeModal } from '../../actions/modal'

export const mapDispatchToProps = (dispatch, ownProps) => ({
  clickHandler: () => dispatch(changeModal('createTask', { show: true, id: ownProps.id }))
})

export default connect(undefined, mapDispatchToProps)(CreateButton)
