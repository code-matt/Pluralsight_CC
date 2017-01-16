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
    reset: false
  },
  question: {
    question: {},
    answered: null,
    loading: false
  },
  search: {
    query: '',
    loading: false,
    options: {
      AdditionType: false,
      MultiplicationType: false,
      SubtractionType: false
    },
    results: []
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
        ['add']: {
          ...state['add'],
          ['distractors']: state.add.distractors.concat(action.distractor)
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
