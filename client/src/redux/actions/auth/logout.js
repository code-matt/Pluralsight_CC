import {notify} from 'react-notify-toast'
import { browserHistory } from 'react-router'

export const logoutActionSuccess = () => ({
  type: 'LOGOUT_SUCCESS'
})

function logout () {
  return function (dispatch) {
    browserHistory.push('/')
    notify.show('Logged Out', 'success', 1500)
    dispatch(logoutActionSuccess())
  }
}

export default logout
