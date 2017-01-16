import { newFetch } from '../lib/newFetch'
import {notify} from 'react-notify-toast'
import {change} from '../app'

function getQuestion (id, random) {
  return function (dispatch) {
    dispatch(change(true, 'loading', 'question'))
    if (random === true) {
      var url = '/api/v1/questions?id=' + id + '&random=true'
    } else {
      var url = '/api/v1/questions?id=' + id
    }
    return newFetch('GET', true, url)
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

