import React, { Component } from 'react'
import './dashboard.css'

// import VisibleLoginForm from '../../redux/containers/login'
import QuestionCard from './search/questions/question-card'
import VisibleQuestionBox from '../../redux/containers/questionbox'
// import SearchForm from './search/search-form'

import {notify} from 'react-notify-toast'


class Dashboard extends Component {

  componentDidUpdate () {
    var routerLocationState = this.props.location.state
    if (routerLocationState) {
      if (routerLocationState.authError) {
        notify.show('You must be logged in to access that page!', 'error', 2000)
      }
    }
  }

  handleValueChange (value, fieldId, propName) {
    this.props._appActions.changeData(value, fieldId, propName)
  }

  handleLogout (event) {
    event.preventDefault()
    this.props._authActions.logout()
  }

  handleSearch () {
    this.props._favActions.getFavorites(
      this.props.appData.search.searchInput
    )
  }

  renderFavorites (favorites) {
    if (favorites.length > 0) {
      return favorites.map((favorite, index) => (
        <QuestionCard favorite={favorite} index={index} />
      ))
    } else {
      return []
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12' style={{width: '100%'}}>
            <VisibleQuestionBox />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard


              // <div className='row'>
              //   {this.props.token
              //     ? <div>You are now logged in.</div>
              //     : <VisibleLoginForm />
              //   }
              // </div>

              //               <div className='row'>
              //   <SearchForm
              //     valueChangeCB={this.handleValueChange.bind(this)}
              //     searchCB={this.handleSearch.bind(this)}
              //     appData={this.props.appData} />
              // </div>
              // {this.props.favorites.length > 0
              //   ? <div className='row'>
              //     <div className='results'>
              //       <ul className='demo-list-control mdl-list'>
              //         { this.renderFavorites(this.props.favorites) }
              //       </ul>
              //     </div>
              //   </div>
              //   : <div className='searchErr'><strong>No search results found, try again...</strong></div>
              // }