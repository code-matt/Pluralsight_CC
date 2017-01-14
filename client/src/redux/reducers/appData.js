const appData = (state, action) => {
  if (!state) {
    state = {
      login: {
        usernameInput: 'matt@matt.com',
        passwordInput: '12345678',
        loading: false
      },
      search: {
        searchInput: 'Search Questions',
        loading: false
      },
      add: {
        Question: '',
        Answer: '',
        Distractors: '',
        loading: false
      }
    }
  }
  switch (action.type) {
    case 'CHANGE_DATA':
      return {
        ...state,
        [action.propName]: {
          ...state[action.propName],
          [action.fieldId]: action.value
        }
      }
    default:
      return state
  }
}

export {
  appData
}
