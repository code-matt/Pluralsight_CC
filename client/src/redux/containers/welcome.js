import { connect } from 'react-redux'
import WelcomeComponent from '../../components/dashboard/pages/welcome/welcome'

const mapStateToProps = (state, ownProps) => {
  return {
    appData: state.appData,
    token: state.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const VisibleWelcomeComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeComponent)

export default VisibleWelcomeComponent
