
import { connect } from 'react-redux'
import CardContainer from '../components/CardContainer'

export const mapStateToProps = state => ({
  items: state.projects.data
})

export default connect(mapStateToProps)(CardContainer)
