import { connect } from 'react-redux'
import Dashboard from '../../components/dashboard/dashboard'
import { change } from '../actions/app'
import { logout } from '../actions/auth'

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions,
    appData: state.appData,
    token: state.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _authActions: {
      logout: () => {
        dispatch(logout())
      }
    },
    _appActions: {
      change: (value, fieldId, objectPropName) => {
        dispatch(change(value, fieldId, objectPropName))
      }
    }
  }
}

const VisibleDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default VisibleDashboard
