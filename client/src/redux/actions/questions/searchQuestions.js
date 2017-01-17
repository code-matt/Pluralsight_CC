import { newFetch } from '../lib/newFetch'
import {change} from '../app'

function searchQuestion (filters) {
  var arr = []
  for (let key in filters) {
    if (filters[key]) {
      arr.push(key)
    }
  }
  var url = '/api/v1/search?filters=' + arr
  return function (dispatch) {
    dispatch(change(true, 'loading', 'search'))
    return newFetch('GET', true, url)
    .catch((error) => console.log(error))
    .then(response => response.json())
    .then(json => {
      dispatch(change(false, 'loading', 'search'))
      dispatch(change(0, 'page', 'search'))
      dispatch(change(json.results, 'results', 'search'))
    })
  }
}

export default searchQuestion

