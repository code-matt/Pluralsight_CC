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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount () {
    this.props._appActions.change(true, 'loading', 'question')
    this.props._appActions.change(null, 'answered', 'question')
    this.props._questionActions.getQuestion(this.props.params.id)
  }

  controlDialog (openBool) {
    this.props._appActions.change(
      openBool,
      'dialogOpen',
      'question'
    )
  }

  handleValueChange (event) {
    this.props._appActions.change(event.target.value, event.target.id, 'question')
  }

  handleSubmit (event) {
    event.preventDefault()
    const UI = this.props.appData.question
    this.props._questionActions.editQuestion(
      {
        number1: event.target[0].value,
        operation: event.target[1].value,
        number2: event.target[2].value,
        answer: event.target[3].value
      },
      UI.question.id
    )
  }

  render () {
    const UI = this.props.appData.question
    const numericPattern = '^[+-]?[0-9]{1,3}(?:(?:,[0-9]{3})*(?:.[0-9]{2})?|(?:.[0-9]{3})*(?:,[0-9]{2})?|[0-9]*(?:[.,][0-9]{2})?)$'
    return (
      <div>
        {UI.loading
          ? <div className='welcome-loading'>
            <h6 style={{paddingBottom: '10px'}}>Loading question....</h6>
            <div className='loading'>
              <Spinner />
            </div>
          </div>
          : <div className='question form-style-8'>
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
          <DialogContent className='form-style-8'>
            <span onClick={() => {
              this.controlDialog(false)
            }}><i className='fa fa-window-close' aria-hidden='true' /></span>
            <form onSubmit={this.handleSubmit} style={{color: '#FFF'}}>
              <span style={{fontSize: '0.7em'}}>Enter a question in the form of "What is (numeric) (operation) (numeric)"</span>
              <br />
              {'What is '}
              <input
                pattern={numericPattern}
                title='Can only be numeric'
                className='question-input'
                style={{width: '75px'}}
                id='number1'
                ref='number1'
                onChange={this.handleValueChange}
                required />
              <input
                pattern='[*\-+\/.]'
                className='question-input'
                maxLength={1} style={{width: '40px'}}
                title='Can only be a math operation.[+,-,/,*]'
                id='operation'
                ref='operation'
                onChange={this.handleValueChange}
                required />
              <input
                pattern={numericPattern}
                title='Can only be numeric'
                className='question-input'
                style={{width: '75px'}}
                id='number2'
                ref='number2'
                name='number2'
                onChange={this.handleValueChange}
                required /> ?
              <hr />
              Enter the correct answer
              <br />
              Answer:
              <input
                pattern={numericPattern}
                title='Can only be numeric'
                className='question-input'
                style={{width: '75px'}}
                ref='answer'
                id='answer'
                onChange={this.handleValueChange} />
              <input type='submit' />
            </form>
          </DialogContent>
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
