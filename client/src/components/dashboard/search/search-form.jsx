import React, { Component } from 'react'
import './search-form.css'
import Textfield from 'react-mdl/lib/Textfield'
import Button from 'react-mdl/lib/Button'
import Tooltip from 'react-mdl/lib/Tooltip'
import Spinner from 'react-mdl/lib/Spinner'

class SearchForm extends Component {

  constructor () {
    super()
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (event) {
    event.preventDefault()
    this.props.searchCB()
  }

  handleValueChange (event) {
    this.props.valueChangeCB(event.target.value, event.target.id, 'search')
  }

  isLoading () {
    if (this.props.appData.search.loading) {
      return (
        <Spinner />
      )
    } else {
      return (
        <Button onClick={this.handleSearch} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
          Search!
        </Button>
      )
    }
  }

  render () {
    return (
      <div className='searchform' id='tt3'>
        <strong>Search Questions</strong>
        <form>
          <div className='label mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <Textfield
              key={'searchInput'}
              id='searchInput'
              defaultValue='Search Questions Here!'
              onChange={this.handleValueChange}
              label=''
            />
            <label className='mdl-textfield__label label' htmlFor='searchInput'>Query</label>
          </div>
          <br />
          {
            this.isLoading()
          }
        </form>
      </div>
    )
  }
}

export default SearchForm
