import { connect } from 'react-redux'
import QuestionComponent from '../../components/dashboard/pages/questionUI/questionUI'
import { change } from '../actions/app'
import { getQuestion, answerQuestion, editQuestion } from '../actions/questions'

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
      getQuestion: (id) => {
        dispatch(getQuestion(id))
      },
      answerQuestion: (id, answer, answered) => {
        dispatch(answerQuestion(id, answer, answered))
      },
      editQuestion: (data, id) => {
        dispatch(editQuestion(data, id))
      }
    }
  }
}

const VisibleQuestionUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionComponent)

export default VisibleQuestionUI
