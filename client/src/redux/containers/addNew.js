import { connect } from 'react-redux'
import AddNewQuestion from '../../components/dashboard/pages/addnew/addNew'
import { change, addDistractor } from '../actions/app'
import { addQuestion } from '../actions/questions'

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
      },
      addDistractor: (distractor, distractors) => {
        dispatch(addDistractor(distractor, distractors))
      }
    },
    _questionActions: {
      addQuestion: (question, answer, distractors) => {
        dispatch(addQuestion(question, answer, distractors))
      }
    }
  }
}

const VisibleAddNewQuestion = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewQuestion)

export default VisibleAddNewQuestion
