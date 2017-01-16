import React, {Component} from 'react'
import Spinner from 'react-mdl/lib/Spinner'

import {browserHistory} from 'react-router'

import './questionUI.css'

export default class QuestionComponent extends Component {

  constructor () {
    super()
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount () {
    this.props._appActions.change(true, 'loading', 'question')
    this.props._appActions.change(null, 'answered', 'question')
    this.props._questionActions.getQuestion(this.props.params.id)
  }

  render () {
    const UI = this.props.appData.question
    return (
      <div>
        {UI.question.loading
          ? <div className='welcome-loading'>
            <h6 style={{paddingBottom: '10px'}}>Loading question...</h6>
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
              </div>
              : null}
          </div>}
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

