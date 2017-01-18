import React, { Component } from 'react'

// containers
import VisibleDashboard from './redux/containers/dashboard'
import VisibleHeader from './redux/containers/header'

// css
import './App.css'

// notifications
import Notifications from 'react-notify-toast'

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import PluralsightCC from './redux/reducers'

const store = createStore(PluralsightCC, applyMiddleware(thunk))

class App extends Component {

  componentWillReceiveProps (nextProps) {
    this.setState({
      children: nextProps.children
    })
  }

  render () {
    return (
      <div>
        <div className='main'>
          <Notifications />
        </div>
        <div className='container-fluid'>
          <div className='row' style={{height: '100%'}}>
            <div className='col-md-10 offset-md-1 content'>
              <div>
                <VisibleHeader store={store} />
              </div>
              <Provider store={store}>
                <VisibleDashboard />
              </Provider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

/**
 * Warning from React Router, caused by react-hot-loader.
 * The warning can be safely ignored, so filter it from the console.
 * Otherwise you'll see it every time something changes.
 * See https://github.com/gaearon/react-hot-loader/issues/298
 */
if (module.hot) {
  const isString = (value) => {
    return typeof value === 'string'
  }

  const orgError = console.error // eslint-disable-line no-console
  console.error = (...args) => { // eslint-disable-line no-console
    if (args && args.length === 1 && isString(args[0]) && args[0].indexOf('You cannot change <Router routes>;') > -1) {
      // React route changed
    } else {
      // Log the error as normally
      orgError.apply(console, args)
    }
  }
}
