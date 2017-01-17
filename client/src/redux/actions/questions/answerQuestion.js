import { newFetch } from '../lib/newFetch'
import {notify} from 'react-notify-toast'
import {change} from '../app'
import { addAnswer, calculateProgress } from '../history'

function answerQuestion (id, answer, answered) {
  return function (dispatch, getState) {
    if (answered === null) {
      return newFetch('POST', true, '/api/v1/answers',
        {
          id: id,
          answer: answer
        }
      )
      .catch((error) => console.log(error))
      .then(response => response.json())
      .then(json => {
        dispatch(change(json.answer, 'answered', 'question'))
        dispatch(addAnswer(json.answer))
        dispatch(change(calculateProgress(getState().history), 'progress', 'piechart'))
      })
    } else {
      notify.show('You cannot answer a question twice', 'error', 1250)
    }
  }
}

export default answerQuestion
