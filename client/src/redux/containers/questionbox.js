import { connect } from 'react-redux'
import QuestionBox from '../../components/dashboard/questionbox/questionbox'

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions,
    appData: state.appData,
    token: state.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const VisibleQuestionBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBox)

export default VisibleQuestionBox

