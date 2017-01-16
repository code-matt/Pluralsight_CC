import React, {Component} from 'react'
import Spinner from 'react-mdl/lib/Spinner'
import Checkbox from 'react-mdl/lib/Checkbox'

import './search.css'

export default class Search extends Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.props._appActions.change({
      ...this.props.appData.search.options,
      [event.target.id]: event.target.checked
    }, 'options', 'search')
  }

  render () {
    return (
      <div className='form-style-8' style={{marginTop: '3px', marginLeft: 'auto', marginRight: 'auto', width: '75%'}}>
        <h5 style={{textAlign: 'center', margin: '0px', padding: '10px'}}>Search Questions</h5>
        <div className='search-options'>
          <Checkbox onChange={this.handleChange} id='AdditionType' label='Addition' ripple />
          <Checkbox onChange={this.handleChange} id='MultiplicationType' label='Multiplication' ripple />
          <Checkbox onChange={this.handleChange} id='SubtractionType' label='Subtraction' ripple />
        </div>
        <input onClick={() => {
          this.props._questionActions.searchQuestions(this.props.appData.search.options)
        }} type='submit' />
      </div>
    )
  }
}

// function renderAnswers (answers, page) {
//   if (answers.length > 0) {
//     return answers.map((answer, index) => (
//       <Answer key={index} answer={answer} />
//         )).splice(page === 0 ? 0 : page * 5, 5)
//   }
//   else return []
// }

// const Answer = ({answer}) => {
//   return (
//     <div className='history-answer'>
//       Question: {answer.question.body} Your answer: {answer.answer}
//       <br />
//       correct?: {answer.correct ? 'true' : 'false'}
//     </div>
//   )
// }
