import { connect } from 'react-redux'
import WelcomeComponent from '../../components/dashboard/pages/welcome/welcome'

import { change } from '../actions/app'
import { getHistory } from '../actions/history'

const mapStateToProps = (state, ownProps) => {
  return {
    appData: state.appData,
    history: state.history
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _appActions: {
      change: (value, fieldId, objectPropName) => {
        dispatch(change(value, fieldId, objectPropName))
      }
    }
  }
}

const VisibleWelcomeComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeComponent)

export default VisibleWelcomeComponent
