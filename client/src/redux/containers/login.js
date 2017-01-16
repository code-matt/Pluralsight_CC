import { connect } from 'react-redux'
import LoginForm from '../../components/dashboard/login/login-form'
import { login } from '../actions/auth'
import { change } from '../actions/app'

const mapStateToProps = (state, ownProps) => {
  return {
    appData: state.appData
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _appActions: {
      change: (value, fieldId, objectPropName) => {
        dispatch(change(value, fieldId, objectPropName))
      }
    },
    _authActions: {
      login: (email, pass) => {
        dispatch(login(email, pass))
      }
    }
  }
}

const VisibleLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default VisibleLoginForm
