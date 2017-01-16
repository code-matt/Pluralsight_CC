import { newFetch } from '../lib/newFetch'
import { change } from '../app'
import { notify } from 'react-notify-toast'


const getHistorySuccess = (history) => ({
  type: 'GET_HISTORY_SUCCESS',
  history: history
})

const getHistoryFail = () => ({
  type: 'GET_HISTORY_FAIL'
})

function getHistory () {
  return function (dispatch) {
    return newFetch('GET', true, '/api/v1/history')
    .then(response => response.json())
    .then(json => {
      setTimeout(() => {
        dispatch(change(false, 'loading', 'welcome'))
        dispatch(getHistorySuccess(json.history))
        dispatch(change(calculateProgress(json.history), 'progress', 'piechart'))
      }, 1250)
    }).catch(error => {
      notify.show('failed..', 'error', 1250)
      dispatch(getHistoryFail())
    })
  }
}

function calculateProgress (history) {
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

