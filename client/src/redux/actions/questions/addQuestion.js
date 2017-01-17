import { newFetch } from '../lib/newFetch'
import {notify} from 'react-notify-toast'
import {resetPage, change} from '../app'
import { browserHistory } from 'react-router'

function addQuestion (question, answer, distractors) {
  return function (dispatch) {
    return newFetch('POST', true, '/api/v1/questions',
      {
        question: question,
        answer: answer,
        distractors: distractors
      }
    )
    .catch((error) => console.log(error))
    .then(response => response.json())
    .then(json => {
      notify.show('Question added', 'success', 1500)
      dispatch(resetPage('add'))
      dispatch(change(true, 'reset', 'add'))
      browserHistory.push('/question/' + json.id)
    })
    .catch((error) => {
      notify.show('Question add failed', 'error', 1500)
    })
  }
}

export default addQuestion
