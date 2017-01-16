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
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.appData.add.reset) {
      this.refs.question.inputRef.value = ''
      this.refs.answer.inputRef.value = ''
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

  render () {
    const UI = this.props.appData.add
    return (
      <div style={{marginTop:'25px',marginLeft: 'auto',marginRight: 'auto',width: '75%'}}>
        <h6 style={{textAlign: 'center',margin: '10px'}}>Add new question</h6>
        <Textfield
          ref='question'
          rows={3}
          id='question'
          key={'questionInput'}
          onChange={this.handleValueChange}
          label='Enter a math question'
          floatingLabel
          style={{width: '100%'}}
        />
        <Textfield
          ref='answer'
          key={'answerInput'}
          id='answer'
          onChange={this.handleValueChange}
          label='Enter the correct answer'
          floatingLabel
          style={{width: '100%'}}
        />
        <div className='distractors'>
          <div style={{textAlign: 'center'}}>
            Add between 1 and 5 distractors
          </div>
          <div className='chip-bg'>
            {UI.distractors.map((distractor, idx) => {
              return <Chip key={idx} style={{marginRight: '10px'}}>{distractor}</Chip>
            })}
            <span style={{fontSize: '2.5em', marginLeft: '100%'}} onClick={() => this.controlDialog(true)}><i style={{color: '#51D9FF'}} className='fa fa-plus-square' aria-hidden='true' /></span>
          </div>
        </div>
        <Button onClick={() => {
          this.props._questionActions.addQuestion(
            UI.question,
            UI.answer,
            UI.distractors
          )
        }} type='button'>
          Submit
        </Button>
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
