import React, {Component} from 'react'

import './progressWidget.css'

export default class QuestionBox extends Component {
  render () {
    return (
      <div style={{textAlign: 'center'}} className='progressWidget'>
        Your Progress
        <br />
        Correct:
        <br />
        Incorrect:
        <br />
        Total:
      </div>
    )
  }
}
