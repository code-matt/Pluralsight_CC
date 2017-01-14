import React, { Component } from 'react'
import './login-form.css'
import Textfield from 'react-mdl/lib/Textfield'
import Button from 'react-mdl/lib/Button'
import Spinner from 'react-mdl/lib/Spinner'

class LoginForm extends Component {

  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange (event) {
    this.props._appActions.changeData(event.target.value, event.target.id, 'login')
  }

  handleSubmit (event) {
    this.props._authActions.login(
      this.props.appData.login.usernameInput,
      this.props.appData.login.passwordInput
    )
    event.preventDefault()
  }

  isLoading () {
    if (this.props.appData.login.loading) {
      return (
        <Spinner />
      )
    } else {
      return (
        <Button onClick={this.handleSubmit} className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent loginbtn'>
          Login
        </Button>
      )
    }
  }
  render () {
    return (
      <div className='loginbox vertical-center' id='tt1'>
        <strong>Login to continue..</strong>
        <form>
          <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label field'>
            <Textfield
              key={'usernameInput'}
              id='usernameInput'
              defaultValue='matt@matt.com'
              onChange={this.handleValueChange}
              label='Email'
            />
            <label className='mdl-textfield__label' htmlFor='usernameInput'>Email</label>
          </div>
          <br />
          <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label field'>
            <Textfield
              key={'passwordInput'}
              id='passwordInput'
              defaultValue='12345678'
              onChange={this.handleValueChange}
              label='Password'
            />
            <label className='mdl-textfield__label' htmlFor='passwordInput'>Password</label>
          </div>
          {
            this.isLoading()
          }
        </form>
      </div>
    )
  }
}

export default LoginForm
