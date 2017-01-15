import React, {Component} from 'react'
import Spinner from 'react-mdl/lib/Spinner'
// import {Provider} from 'react-redux'

import './questionUI.css'

export default class QuestionComponent extends Component {

  constructor () {
    super()
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount () {
    this.props._appActions.change(true, 'loading', 'question')
    this.props._questionActions.getQuestion(1, true)
  }

  componentDidMount () {
    // call backend get question for id
  }

  componentWillReceiveProps (props) {

  }

  render () {
    return (
      <div>
        {this.props.appData.question.loading
          ? <div className='welcome-loading'>
            <h6 style={{paddingBottom: '10px'}}>Loading question..</h6>
            <div className='loading'>
              <Spinner />
            </div>
          </div>
          : <div className='question'>
            {this.props.appData.question.question.data
              ? <h4>{this.props.appData.question.question.data.body}</h4>
              : null}
          </div>}
      </div>
    )
  }
}
