import { newFetch } from '../lib/newFetch'
import { change } from '../app'

const getHistorySuccess = (history) => ({
  type: 'GET_HISTORY_SUCCESS',
  history: history
})

function getHistory () {
  return function (dispatch) {
    return newFetch('GET', true, '/api/v1/history')
    .catch((error) => console.log(error))
    .then(response => response.json())
    .then(json => {
      setTimeout(() => {
        dispatch(change(false, 'loading', 'welcome'))
        dispatch(getHistorySuccess(json.history))
        dispatch(change(calculateProgress(json.history), 'progress', 'piechart'))
      }, 1250)
    })
  }
}

export function calculateProgress (history) {
  var correct = 0
  var incorrect = 0
  history.forEach((q) => {
    if (q.correct) {
      correct++
    } else {
      incorrect++
    }
  })
  return [correct, incorrect]
}

export default getHistory

