import React, {Component} from 'react'

import VisibleLoginForm from '../../../redux/containers/login'

import './questionbox.css'
import {notify} from 'react-notify-toast'

export default class QuestionBox extends Component {
  render () {
    return (
      <div className='questionbox'>
        {this.props.token
          ? <div>Queeeeqqqeustion box</div>
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
