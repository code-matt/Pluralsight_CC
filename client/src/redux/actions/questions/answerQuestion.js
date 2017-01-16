import { newFetch } from '../lib/newFetch'
import {notify} from 'react-notify-toast'
import {change} from '../app'

function answerQuestion (id, answer, answered) {
  return function (dispatch) {
    if (answered === null) {
      return newFetch('POST', true, '/api/v1/answers',
        {
          id: id,
          answer: answer
        }
      )
      .then(response => response.json())
      .then(json => {
        dispatch(change(json, 'answered', 'question'))
      })
    } else {
      notify.show('You cannot answer a question twice', 'error', 1250)
    }
  }
}

export default answerQuestion
