import { connect } from 'react-redux'
import Dashboard from '../../components/dashboard/dashboard'
import { change } from '../actions/app'
import { logout } from '../actions/auth'
import { getHistory } from '../actions/history'

const mapStateToProps = (state, ownProps) => {
  return {
    history: state.history,
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
    },
    _historyActions: {
      getHistory: () => {
        dispatch(getHistory())
      }
    }
  }
}

const VisibleDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default VisibleDashboard
