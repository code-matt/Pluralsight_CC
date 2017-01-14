import { connect } from 'react-redux'
import QuestionBox from '../../components/dashboard/questionbox/questionbox'
import {logout} from '../actions/auth'

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
    }
  }
}

const VisibleQuestionBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBox)

export default VisibleQuestionBox

