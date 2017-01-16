import React, {Component} from 'react'
import Spinner from 'react-mdl/lib/Spinner'

import './welcome.css'

export default class WelcomeUI extends Component {
  constructor () {
    super()
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount () {
  }

  componentWillReceiveProps (props) {

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
          : <div style={{height: '100%', textAlign: 'center'}}>
            -Your answer history-
            <div>
              {renderAnswers(
                this.props.history,
                UI.page)}
            </div>
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
        )).splice(page === 0 ? 0 : page * 5, 5)
  }
  else return []
}

const Answer = ({answer}) => {
  return (
    <div className='history-answer'>
      Question: {answer.question.body} Your answer: {answer.answer}
      <br />
      correct?: {answer.correct ? 'true' : 'false'}
    </div>
  )
}
