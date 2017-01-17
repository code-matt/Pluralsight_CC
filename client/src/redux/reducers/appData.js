const DEFAULT_STATE = {
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
    distractor: '',
    distractors: [],
    loading: false,
    dialogOpen: false,
    reset: false,
    link: null
  },
  question: {
    question: {},
    answered: null,
    loading: false,
    dialogOpen: false,
    editquestion: '',
    editanswer: ''
  },
  search: {
    query: '',
    loading: false,
    options: {
      AdditionType: false,
      MultiplicationType: false,
      SubtractionType: false
    },
    results: [],
    page: 0
  },
  piechart: {
    progress: [0, 0]
  }
}

const appData = (state, action) => {
  if (!state) {
    state = DEFAULT_STATE
  }
  switch (action.type) {
    case 'RESET_PAGE':
      return {
        ...state,
        [action.page]: DEFAULT_STATE[action.page]
      }
    case 'ADD_DISTRACTOR':
      return {
        ...state,
        'add': {
          ...state['add'],
          'distractors': state.add.distractors.concat(action.distractor)
        }
      }
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
