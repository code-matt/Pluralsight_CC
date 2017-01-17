import React, {Component} from 'react'
import { browserHistory } from 'react-router'

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
    const UI = this.props.appData.search
    return (
      <div className='form-style-8' style={{padding: '10px 10px',marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', width: '75%'}}>
        <div className='search-options'>
          <Checkbox onChange={this.handleChange} id='AdditionType' label='Addition' ripple />
          <Checkbox onChange={this.handleChange} id='MultiplicationType' label='Multiplication' ripple />
          <Checkbox onChange={this.handleChange} id='SubtractionType' label='Subtraction' ripple />
        </div>
        <input onClick={() => {
          this.props._questionActions.searchQuestions(UI.options)
        }} type='submit' />
        {!UI.loading
        ? <div>
          <div style={{marginTop: '10px', textAlign: 'center'}}>
            {renderResults(UI.results, UI.page)}
          </div>
          {UI.page !== 0
          ? <div className='pull-left history-button'
            onClick={() => this.props._appActions.change(
              UI.page - 1,
              'page',
              'search'
            )}><i className='fa fa-arrow-left fa-2x' aria-hidden='true' />
          </div>
          : null}
          {UI.page <= Math.floor((UI.results.length / 10) - 1)
          ? <div className='pull-right history-button'
            onClick={() => this.props._appActions.change(
              UI.page + 1,
              'page',
              'search'
            )}><i className='fa fa-arrow-right fa-2x' aria-hidden='true' />
          </div>
          : null}
        </div>
        : <Spinner />}
      </div>
    )
  }
}

function renderResults (results, page) {
  if (results.length > 0) {
    return results.map((result, index) => (
      <Result key={index} result={result} />
        )).splice(page === 0 ? 0 : page * 10, 10)
  }
  else return []
}

const Result = ({result}) => {
  return (
    <div onClick={() => {
      browserHistory.push('/question/' + result.id)
    }}className='search-result'>
      {result.data.body}
    </div>
  )
}
