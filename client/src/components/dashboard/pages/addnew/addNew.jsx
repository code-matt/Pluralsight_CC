import React, {Component} from 'react'

import Button from 'react-mdl/lib/Button'
import Textfield from 'react-mdl/lib/Textfield'
import {Dialog, DialogTitle, DialogActions, DialogContent} from 'react-mdl/lib/Dialog'
import {Chip} from 'react-mdl/lib/Chip'

import './addNew.css'

export default class AddNewQuestion extends Component {
  constructor () {
    super()
    this.controlDialog = this.controlDialog.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.appData.add.reset) {
      this.refs.question.value = ''
      this.refs.answer.value = ''
      this.props._appActions.change(false, 'reset', 'add')
    }
  }

  handleValueChange (event) {
    this.props._appActions.change(event.target.value, event.target.id, 'add')
  }

  controlDialog (openBool) {
    this.props._appActions.change(
      openBool,
      'dialogOpen',
      'add'
    )
  }

  handleSubmit (event) {
    const UI = this.props.appData.add
    this.props._questionActions.addQuestion(
      {
        number1: event.currentTarget.elements.number1.value,
        operator: event.currentTarget.elements.operation.value,
        number2: event.currentTarget.elements.number2.value
      },
      UI.answer,
      UI.distractors
    )
  }

  render () {
    const UI = this.props.appData.add
    const numericPattern = '^[+-]?[0-9]{1,3}(?:(?:,[0-9]{3})*(?:.[0-9]{2})?|(?:.[0-9]{3})*(?:,[0-9]{2})?|[0-9]*(?:[.,][0-9]{2})?)$'
    return (
      <div className='form-style-8' style={{paddingTop: '5px',marginTop: '10px', marginLeft: 'auto', marginRight: 'auto', width: '75%'}}>
        <h5 style={{textAlign: 'center', margin: '0px', padding: '5px'}}>Add new question</h5>
        <form onSubmit={this.handleSubmit}>
          <span style={{fontSize: '0.7em'}}>Enter a question in the form of "What is (numeric) (operation) (numeric)"</span>
          <br />
          {'What is '}
          <input
            pattern={numericPattern}
            title='Can only be numeric'
            className='question-input'
            style={{width: '75px'}}
            id='number1'
            ref='number1'
            onChange={this.handleValueChange} />
          <input
            pattern='[*\-+\/.]'
            className='question-input'
            maxLength={1} style={{width: '40px'}}
            title='Can only be a math operation.[+,-,/,*]'
            id='operation'
            ref='number=1'
            onChange={this.handleValueChange} />
          <input
            pattern={numericPattern}
            title='Can only be numeric'
            className='question-input'
            style={{width: '75px'}}
            id='number2'
            ref='number2'
            name='number2'
            onChange={this.handleValueChange} /> ?
          <hr />
          Enter the correct answer
          <br />
          Answer:
          <input
            pattern={numericPattern}
            title='Can only be numeric'
            className='question-input'
            style={{width: '75px'}}
            ref='answer'
            id='answer'
            onChange={this.handleValueChange} />
          <div className='distractors'>
            <div style={{textAlign: 'center'}}>
            Add between 1 and 5 distractors 
              <span style={{fontSize: '2.5em'}} onClick={() => this.controlDialog(true)}><i style={{color: '#51D9FF'}} className='fa fa-plus-square' aria-hidden='true' /></span>
            </div>
            <div className='chip-bg'>
              {UI.distractors.map((distractor, idx) => {
                return <Chip key={idx} style={{marginRight: '10px'}}>{distractor}</Chip>
              })}
            </div>
          </div>
          <input type='submit' />
        </form>
        <Dialog open={UI.dialogOpen} onCancel={this.handleCloseDialog}>
          <DialogTitle>Add a distractor</DialogTitle>
          <DialogContent>
            <Textfield
              rows={3}
              key={'distractorInput'}
              id='distractor'
              onChange={this.handleValueChange}
              label='Distractor'
              floatingLabel
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {
              this.props._appActions.addDistractor(UI.distractor, UI.distractors)
            }} type='button'>Submit</Button>
            <Button type='button' onClick={() => this.controlDialog(false)}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
