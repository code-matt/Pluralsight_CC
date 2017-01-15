import { newFetch } from '../lib/newFetch'
import {notify} from 'react-notify-toast'
import {change} from '../app'

const setQuestionsAction = (favorites) => ({
  type: 'SET_QUESTIONS',
  favorites: favorites
})

function getQuestions (query) {
  return function (dispatch) {
    dispatch(change(true, 'loading', 'search'))
    return newFetch('GET', false, '/api/v1/questions?query=' + query)
    .catch(error => {
      dispatch(change(false, 'loading', 'false'))
      notify.show('Something went wrong, are your sure your rails server is running?', 'error', 2000)
    })
    .then(response => response.json())
    .then(json =>
      setTimeout(() => {
        dispatch(change(false, 'loading', 'search'))
        dispatch(setQuestionsAction(json.favs))
      }, 2500)
    )
  }
}

export {
  getQuestions
}
