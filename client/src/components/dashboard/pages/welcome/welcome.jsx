import React, {Component} from 'react'
import { browserHistory } from 'react-router'

import Spinner from 'react-mdl/lib/Spinner'
import { calculateProgress } from '../../../../redux/actions/history'
import './welcome.css'

export default class WelcomeUI extends Component {
  constructor () {
    super()
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount () {
    if (this.props.history.length === 0 && this.props.token) {
      this.props._appActions.change(true, 'loading', 'welcome')
      this.props._historyActions.getHistory()
    } else {
      this.props._appActions.change(
        calculateProgress(this.props.history),
        'progress',
        'piechart')
    }
  }

  render () {
    const UI = this.props.appData.welcome
    return (
      <div>
        {UI.loading
          ? <div className='welcome-loading'>
            <h6 style={{paddingBottom: '10px'}}>Loading history..</h6>
            <div className='loading'>
              <Spinner />
            </div>
          </div>
          : <div className='form-style-8 row'>
            <h5>Your answer history</h5>
            <br />
            {renderAnswers(
              this.props.history,
              UI.page)}
            <div className='page-buttons'>
              {UI.page !== 0
              ? <div className='pull-left history-button'
                onClick={() => this.props._appActions.change(
                  UI.page - 1,
                  'page',
                  'welcome'
                )}><i className='fa fa-arrow-left fa-2x' aria-hidden='true' />
              </div>
              : null}
              {UI.page <= Math.floor((this.props.history.length / 5) - 1)
              ? <div className='pull-right history-button'
                onClick={() => this.props._appActions.change(
                  UI.page + 1,
                  'page',
                  'welcome'
                )}><i className='fa fa-arrow-right fa-2x' aria-hidden='true' />
              </div>
              : null}
            </div>
          </div>
        }
      </div>
    )
  }
}

function renderAnswers (answers, page) {
  if (answers.length > 0) {
    return answers.map((answer, index) => (
      <Answer key={index} answer={answer} />
        )).splice(page === 0 ? 0 : page * 4, 4)
  }
  else return []
}

const Answer = ({answer}) => {
  return (
    <div
      onClick={() => {
        browserHistory.push('/question/' + answer.id)
      }} className='col-md-4 offset-md-1 history-answer'>
      Question: {answer.question.body}
      <hr />
      Your answer: {answer.answer}
      <hr />
      correct?: {answer.correct ? 'true' : 'false'}
    </div>
  )
}
