import { newFetch } from '../lib/newFetch'
// import {change} from '../app'

function editQuestion (body, answer, distractors) {
  return function (dispatch) {
    return newFetch('POST', true, '/api/v1/questions/edit', {
      body: body,
      answer: answer,
      distractors: distractors
    })
    .catch((error) => console.log(error))
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
  }
}

export default editQuestion
