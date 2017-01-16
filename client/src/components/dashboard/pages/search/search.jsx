import React, {Component} from 'react'
import Spinner from 'react-mdl/lib/Spinner'
import Checkbox from 'react-mdl/lib/Checkbox'

import './search.css'

export default class Search extends Component {
  constructor () {
    super()
    // this.componentWillMount = this.componentWillMount.bind(this)
  }

  render () {
    return (
      <div className='form-style-8' style={{marginTop: '3px', marginLeft: 'auto', marginRight: 'auto', width: '75%'}}>
        <h5 style={{textAlign: 'center', margin: '0px', padding: '10px'}}>Search Questions</h5>
        <div className='search-options'>
          <Checkbox label='Addition' ripple />
          <Checkbox label='Multiplication' ripple />
          <Checkbox label='Subtraction' ripple />
        </div>
        <input type='submit' />
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
