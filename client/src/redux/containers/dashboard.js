import { connect } from 'react-redux'
import Dashboard from '../../components/dashboard/dashboard'
import { changeData } from '../actions/app/changeData'
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
      changeData: (value, fieldId, objectPropName) => {
        dispatch(changeData(value, fieldId, objectPropName))
      }
    }
  }
}

const VisibleDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default VisibleDashboard
