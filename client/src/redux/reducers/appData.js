const appData = (state, action) => {
  if (!state) {
    state = {
      login: {
        usernameInput: 'matt@matt.com',
        passwordInput: '12345678',
        loading: false
      },
      welcome: {
        page: 0,
        loading: false
      },
      add: {
        question: '',
        answer: '',
        distractors: '',
        loading: false
      },
      question: {
        question: {},
        answered: null,
        loading: false
      },
      search: {
        query: '',
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
