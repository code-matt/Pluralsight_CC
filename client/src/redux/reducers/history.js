const history = (state = [], action) => {
  // var localStorage = window.localStorage
  // if (!state) {
  //   state = localStorage.token || null
  // }
  switch (action.type) {
    case 'GET_HISTORY_SUCCESS':
      // localStorage.token = action.token
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
