import React, {Component} from 'react'

// import {Provider} from 'react-redux'

import './questionUI.css'

export default class QuestionComponent extends Component {
  render () {
    return (
      <div>
        {this.props.params.id}
        ima question
        {this.props.token}
      </div>
    )
  }
}
