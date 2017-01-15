import { connect } from 'react-redux'
import QuestionComponent from '../../components/dashboard/widgets/questionUI'

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const VisibleQuestionComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionComponent)

export default VisibleQuestionComponent
