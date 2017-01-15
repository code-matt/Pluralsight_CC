const appData = (state, action) => {
  if (!state) {
    state = {
      login: {
        usernameInput: 'matt@matt.com',
        passwordInput: '12345678',
        loading: false
      },
      welcome: {
        loading: false
      },
      add: {
        question: '',
        answer: '',
        distractors: '',
        loading: false
      },
      question: {
        question: '',
        answers: [],
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
