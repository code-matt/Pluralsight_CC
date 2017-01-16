import getHistory, { calculateProgress } from './getHistory'


export const addAnswer = (answer) => ({
  type: 'ADD_NEW_ANSWER',
  answer: answer
})


export {
  getHistory,
  calculateProgress
}
