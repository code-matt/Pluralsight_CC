import React, {Component} from 'react'

import VisibleLoginForm from '../../redux/containers/login'
import VisibleQuestionUI from '../../redux/containers/questionUI'
import WelcomeUI from '../../redux/containers/welcome'

import ProgressWidget from './widgets/progressWidget/progressWidget'

import './dashboard.css'
import {notify} from 'react-notify-toast'
import Button from 'react-mdl/lib/Button'

import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

export default class Dashboard extends Component {
  render () {
    return (
      <div className='questionbox'>
        {this.props.token
          ? <div className='' style={{width: '100%', height: '400px'}}>
            <div classame='row' style={{width: '100%', height: '100%'}}>
              <div className='col-md-8'>
                <div className='row nav'>
                  <div className='bar'>
                    <Button onClick={() => this.props._authActions.logout()} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent nav-button'>
                      Logout
                    </Button>
                    <Button onClick={() => browserHistory.push('/')} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
                      Dashboard
                    </Button>
                    <Button onClick={() => this.props._authActions.logout()} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
                      Random Question
                    </Button>
                    <Button onClick={() => this.props._authActions.logout()} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
                      Search Questions
                    </Button>
                    <Button onClick={() => this.props._authActions.logout()} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
                      Add Question
                    </Button>
                  </div>
                </div>
                <div className='row'>
                  <Router history={browserHistory}>
                    <Route path='/' component={WelcomeUI} />
                    <Route path='/:id' component={VisibleQuestionUI} />
                  </Router>
                </div>
              </div>
              <div className='col-md-4 sidebar' style={{height: '100%'}}>
                <ProgressWidget />
              </div>
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

Dashboard.contextTypes = {
  store: React.PropTypes.object
}
