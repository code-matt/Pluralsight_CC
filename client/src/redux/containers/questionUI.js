import { connect } from 'react-redux'
import QuestionComponent from '../../components/dashboard/pages/questionUI/questionUI'
import React from 'react'

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const VisibleQuestionUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionComponent)

export default VisibleQuestionUI
