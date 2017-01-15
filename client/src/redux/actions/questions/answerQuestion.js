import { newFetch } from '../lib/newFetch'
import {notify} from 'react-notify-toast'
import {change} from '../app'

function answerQuestion (id, answer) {
  return function (dispatch) {
    // dispatch(change(true, 'loading', 'question'))
    return newFetch('POST', true, '/api/v1/answers',
      {
        id: id,
        answer: answer
      }
    )
    .then(response => response.json())
    .then(json => {
      // dispatch(change(false, 'loading', 'question'))
      dispatch(change(json, 'answered', 'question'))
    })
  }
}

export default answerQuestion
