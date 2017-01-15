import React, {Component} from 'react'
import Spinner from 'react-mdl/lib/Spinner'

import './welcome.css'

export default class WelcomeUI extends Component {
  constructor () {
    super()
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount () {
    this.props._appActions.change(true, 'loading', 'welcome')
    this.props._historyActions.getHistory()
  }

  render () {
    return (
      <div>
        {this.props.appData.welcome.loading
          ? <div className='welcome-loading'>
            <h6 style={{paddingBottom: '10px'}}>Loading history..</h6>
            <div className='loading'>
              <Spinner />
            </div>
          </div>
          : <div style={{textAlign: 'center'}}>
            Welcome!
            <br />
            ***Show answer history.. paginate***
            <br />
            {this.props.history.length}
          </div>
        }
      </div>
    )
  }
}
