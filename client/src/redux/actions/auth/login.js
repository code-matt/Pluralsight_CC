import { newFetch } from '../lib/newFetch'
import {notify} from 'react-notify-toast'
import {changeData} from '../app/changeData'

export const loginActionSuccess = (jwt) => ({
  type: 'LOGIN_SUCCESS',
  token: jwt
})

export const loginActionFail = () => ({
  type: 'LOGIN_FAIL',
  token: null
})

function login (email, pass) {
  return function (dispatch) {
    dispatch(changeData(true, 'loading', 'login'))
    return newFetch('POST', false, '/api/v1/knock/auth_token', {
      auth: {
        email: email,
        password: pass
      }
    })
    .then(response => response.json())
    .then(json => {
      setTimeout(() => {
        notify.show('Logged In', 'success', 1250)
        dispatch(changeData(false, 'loading', 'login'))
        dispatch(loginActionSuccess(json.jwt))
      }, 2500)
    }).catch(error => {
      dispatch(loginActionFail())
      setTimeout(() => {
        notify.show('Login Failed :(', 'error', 1250)
        dispatch(changeData(false, 'loading', 'login'))
        dispatch(loginActionFail())
      }, 2500)
    })
  }
}

export default login
