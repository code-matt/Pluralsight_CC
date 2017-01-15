import { connect } from 'react-redux'
import Header from '../../components/dashboard/header/header'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const VisibleHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default VisibleHeader
