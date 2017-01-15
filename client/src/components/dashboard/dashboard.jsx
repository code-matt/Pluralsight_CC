import React, {Component} from 'react'

import VisibleLoginForm from '../../redux/containers/login'
import ProgressWidget from './widgets/progressWidget/progressWidget'

import './dashboard.css'
import {notify} from 'react-notify-toast'
import Button from 'react-mdl/lib/Button'

export default class QuestionBox extends Component {
  render () {
    return (
      <div className='questionbox'>
        {this.props.token
          ? <div style={{width: '100%', height: '100%'}}>
            <Button onClick={() => this.props._authActions.logout()} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent loginbtn'>
              Logout
            </Button>
            <div style={{height: '100%'}} className='pull-right'>
              <ProgressWidget />
            </div>
          </div>
          : <div className='row'>
            <div className='col-md-12'>
              <VisibleLoginForm />
            </div>
          </div>
        }
      </div>
    )
  }
}
