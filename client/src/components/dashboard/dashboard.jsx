import React, {Component} from 'react'
import { Router, Route, browserHistory } from 'react-router'

import VisibleLoginForm from '../../redux/containers/login'
import VisibleQuestionUI from '../../redux/containers/questionUI'
import VisibleAddNewQuestion from '../../redux/containers/addNew'
import VisibleSearch from '../../redux/containers/search'
import WelcomeUI from '../../redux/containers/welcome'
import NotFound from '../not-found/notfound'

import { calculateProgress } from '../../redux/actions/history'
import ProgressWidget from './widgets/progressWidget/progressWidget'
import Button from 'react-mdl/lib/Button'

import './dashboard.css'

export default class Dashboard extends Component {
  constructor () {
    super()
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount () {
    if (window.location.pathName !== '/') {
      if (this.props.history.length === 0 && this.props.token) {
        this.props._appActions.change(true, 'loading', 'welcome')
        this.props._historyActions.getHistory()
      } else {
        this.props._appActions.change(
          calculateProgress(this.props.history),
          'progress',
          'piechart')
      }
    }
  }

  render () {
    return (
      <div className='questionbox container' style={{height: '100%', padding: '0 0'}}>
        {this.props.token
          ? <div>
            <div className='col-sm-12 col-md-8 leftside'>
              <div className='row nav'>
                <div className='bar'>
                  <Button onClick={() => this.props._authActions.logout()} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent nav-button'>
                    Logout
                  </Button>
                  <Button onClick={() => browserHistory.push('/')} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
                    Dashboard
                  </Button>
                  <Button onClick={() => browserHistory.push('/search')} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
                    Search Questions
                  </Button>
                  <Button onClick={() => browserHistory.push('/addnew')} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
                    Add Question
                  </Button>
                </div>
              </div>
              <div className='routercontent' style={{height: '100%'}}>
                <Router history={browserHistory}>
                  <Route path='/' component={WelcomeUI} />
                  <Route path='/question/:id' component={VisibleQuestionUI} />
                  <Route path='/addnew' component={VisibleAddNewQuestion} />
                  <Route path='/search' component={VisibleSearch} />
                  <Route path='/*' component={NotFound} />
                </Router>
              </div>
            </div>
            <div className='col-sm-12 col-md-4 sidebar' style={{height: '100%'}}>
              <ProgressWidget history={this.props.history} appData={this.props.appData} progress={this.props.appData.piechart.progress} />
            </div>
          </div>
          : <div className='row'>
            <div className='col-md-12 login'>
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
