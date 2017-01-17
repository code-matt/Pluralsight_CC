import { newFetch } from '../lib/newFetch'
import {change} from '../app'

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
      dispatch(change(json, 'question', 'question'))
      dispatch(change(false, 'dialogOpen', 'question'))
    })
  }
}

export default editQuestion
