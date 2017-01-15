import { connect } from 'react-redux'
import QuestionComponent from '../../components/dashboard/pages/questionUI/questionUI'
import { change } from '../actions/app'
import { getQuestion } from '../actions/questions'

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token,
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
    _questionActions: {
      getQuestion: (id, randomBool) => {
        dispatch(getQuestion(id, randomBool))
      }
    }
  }
}

const VisibleQuestionUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionComponent)

export default VisibleQuestionUI
