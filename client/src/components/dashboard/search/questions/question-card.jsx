import React, { Component } from 'react'
import './question-card.css'

class QuestionCard extends Component {
  render () {
    return (
      <div key={'questioncard' + this.props.favorite.id}>
        <li className='mdl-list__item'>
          <span className='resultbox mdl-list__item-primary-content'>
            dis is a question search result
          </span>
        </li>
      </div>
    )
  }
}

export default QuestionCard
