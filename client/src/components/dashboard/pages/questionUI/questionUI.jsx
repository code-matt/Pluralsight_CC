import React, {Component} from 'react'
import Spinner from 'react-mdl/lib/Spinner'

import {browserHistory} from 'react-router'

import './questionUI.css'

export default class QuestionComponent extends Component {

  constructor () {
    super()
    this.componentWillMount = this.componentWillMount.bind(this)
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  componentWillMount () {
    this.props._appActions.change(true, 'loading', 'question')
    this.props._appActions.change(null, 'answered', 'question')
    if (this.props.params.id) {
      this.props._questionActions.getQuestion(this.props.params.id, false)
    } else {
      this.props._questionActions.getQuestion(1, true)
    }
  }

  componentWillReceiveProps (props) {
    if (this.props.location.pathname === '/random' && props.appData.question.question.id) {
      browserHistory.push('/question/' + props.appData.question.question.id)
    }
  }

  render () {
    return (
      <div>
        {this.props.appData.question.question.loading
          ? <div className='welcome-loading'>
            <h6 style={{paddingBottom: '10px'}}>Loading question...</h6>
            <div className='loading'>
              <Spinner />
            </div>
          </div>
          : <div className='question'>
            {this.props.appData.question.question.id
              ? <div>
                {this.props.appData.question.answered
                ? this.props.appData.question.answered.correct ? 'Correct answer!' : 'Wrong answer'
                : null}
                <h4>{this.props.appData.question.question.body}</h4>
                {renderQuestionAnswers(this.props.appData.question.question.answers, this.props.appData.question.question.id, this)}
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

