import React, {Component} from 'react'

import Spinner from 'react-mdl/lib/Spinner'
import {Dialog, DialogTitle, DialogActions, DialogContent} from 'react-mdl/lib/Dialog'
import Button from 'react-mdl/lib/Button'

import './questionUI.css'

export default class QuestionComponent extends Component {
  constructor () {
    super()
    this.componentWillMount = this.componentWillMount.bind(this)
    this.controlDialog = this.controlDialog.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  componentWillMount () {
    this.props._appActions.change(true, 'loading', 'question')
    this.props._appActions.change(null, 'answered', 'question')
    this.props._questionActions.getQuestion(this.props.params.id)
  }

  controlDialog (openBool) {
    this.props._appActions.change(this.refs.editquestion.value, 'editquestion', 'question')
    this.refs.editquestion.value = this.props.appData.question.question.body
    this.props._appActions.change(
      openBool,
      'dialogOpen',
      'question'
    )
  }

  handleValueChange (event) {
    this.props._appActions.change(event.target.value, event.target.id, 'question')
  }

  render () {
    const UI = this.props.appData.question
    return (
      <div>
        {UI.loading
          ? <div className='welcome-loading'>
            <h6 style={{paddingBottom: '10px'}}>Loading question....</h6>
            <div className='loading'>
              <Spinner />
            </div>
          </div>
          : <div className='question'>
            {UI.question.id
              ? <div>
                {UI.answered
                ? UI.answered.correct ? 'You answered correctly!' : 'You answered wrong.'
                : null}
                <h4>{UI.question.body}</h4>
                {renderQuestionAnswers(UI.question.answers, UI.question.id, this)}
                <Button onClick={() => this.controlDialog(true)}>
                  Edit Question
                </Button>
              </div>
              : null}
          </div>}
        <Dialog open={UI.dialogOpen} onCancel={this.handleCloseDialog}>
          <span style={{cursor: 'pointer'}} onClick={() => {
            this.controlDialog(false)
          }}><i className='fa fa-window-close' aria-hidden='true' /></span>
          <div className='form-style-8' style={{width: '100%'}}>
            <DialogTitle>Edit Question</DialogTitle>
            <DialogContent>
              <input
                onChange={this.handleValueChange}
                type='text'
                placeholder='Question'
                id='editquestion'
                ref='editquestion' />
              <input
                onChange={this.handleValueChange}
                type='text'
                placeholder='Answer'
                id='editanswer' />
            </DialogContent>
            <DialogActions>
              <input type='submit' onClick={() => {
                this.props._questionActions.editQuestion(
                  UI.editquestion,
                  UI.editanswer,
                  UI.question.id
                )
              }} />
            </DialogActions>
          </div>
        </Dialog>
      </div>
    )
  }
}

function renderQuestionAnswers (answers, id, component) {
  if (answers.length > 0) {
    return answers.map((answer, index) => (
      <QuestionAnswer key={index} answer={answer} questionID={id} component={component} />
        ))
  }
  else return []
}

const QuestionAnswer = ({answer, questionID, component}) => {
  return (
    <div className='question-answer'
      onClick={() => component.props._questionActions.answerQuestion(
        questionID,
        answer,
        component.props.appData.question.answered)
    }>
      {answer}
    </div>
  )
}

