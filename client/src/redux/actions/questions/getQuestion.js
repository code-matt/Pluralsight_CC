import { newFetch } from '../lib/newFetch'
import {change} from '../app'

function getQuestion (id) {
  return function (dispatch) {
    dispatch(change(true, 'loading', 'question'))
    return newFetch('GET', true, '/api/v1/questions/?id=' + id)
    .catch((error) => console.log(error))
    .then(response => response.json())
    .then(json => {
      dispatch(change(false, 'loading', 'question'))
      dispatch(change(json, 'question', 'question'))
      if (json.answered) {
        dispatch(change(json.answered, 'answered', 'question'))
      }
    })
  }
}

export default getQuestion

