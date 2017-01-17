import React, {Component} from 'react'
import { Pie } from './pie'

import Spinner from 'react-mdl/lib/Spinner'

import './progressWidget.css'

export default class QuestionBox extends Component {
  render () {
    const UI = this.props.appData.piechart
    var colors = ['#58CF6C', '#F2317A']
    return (
      <div style={{height: '100%', textAlign: 'center'}} className='progressWidget'>
        <h4 style={{marginTop: '0px', marginBottom: '25%'}}>Your Progress</h4>
        {UI.loading
          ? <Spinner />
          : <div>
            {this.props.progress.reduce((a,b) => a+b) !== 0
            ? <div>
              <Pie
                data={this.props.progress}
                radius={90}
                hole={0}
                colors={colors}
                strokeWidth={3}
                labels
              />
              <p>Correct: {this.props.progress[0]}</p>
              <p>Incorrect: {this.props.progress[1]}</p>
            </div>
            : null}
          </div>}

      </div>
    )
  }
}
