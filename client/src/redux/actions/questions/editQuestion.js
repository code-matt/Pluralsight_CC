import { newFetch } from '../lib/newFetch'
import {change} from '../app'
import {notify} from 'react-notify-toast'

function editQuestion (body, answer, id) {
  return function (dispatch) {
    return newFetch('POST', true, '/api/v1/edit', {
      body: body,
      answer: answer,
      id: id
    })
    .catch((error) => console.log(error))
    .then(response => response.json())
    .then(json => {
      if (json.error) {
        notify.show(json.error, 'error', 1500)
      } else {
        dispatch(change(json, 'question', 'question'))
        dispatch(change(false, 'dialogOpen', 'question'))
      }
    })
  }
}

export default editQuestion
