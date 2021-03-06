const history = (state, action) => {
  var localStorage = window.localStorage
  if (!state) {
    if (localStorage.history) {
      state = JSON.parse(localStorage.history).history || []
    } else {
      state = []
    }
  }
  switch (action.type) {
    case 'ADD_NEW_ANSWER':
      var newHistory = [action.answer].concat(state)
      localStorage.history = JSON.stringify({history: newHistory})
      return newHistory
    case 'GET_HISTORY_SUCCESS':
      localStorage.history = JSON.stringify({history: action.history})
      return action.history
    case 'GET_HISTORY_FAIL':
      return []
    default:
      return state
  }
}

export {
  history
}
