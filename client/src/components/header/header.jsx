import React, { Component } from 'react'
import './header.css'
import logo from '../../pl.png'

class Header extends Component {
  render () {
    return (
      <div className='App App-header'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div id='tt2'>
                <div className='App-logo'>
                  <img src={logo} className='App-logo' alt='logo' />
                </div>
                <h6>Pluralsight CodeChallenge Question App</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
