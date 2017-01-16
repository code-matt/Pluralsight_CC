import change from './change'
import {notify} from 'react-notify-toast'

const addDistractorSuccess = (distractor) => ({
  type: 'ADD_DISTRACTOR',
  distractor: distractor
})

export const resetPage = (page) => ({
  type: 'RESET_PAGE',
  page: page
})

export function addDistractor (distractor, distractors) {
  return function (dispatch) {
    if (distractors.length > 4) {
      notify.show('You can only add 5 distractors', 'error', 2000)
    } else {
      if (isNaN(distractor)) {
        notify.show('Distractor must be a number', 'error', 2000)
      } else {
        dispatch(addDistractorSuccess(distractor))
        dispatch(change(false, 'dialogOpen', 'add'))
      }
    }
  }
}

export {
  change
}
