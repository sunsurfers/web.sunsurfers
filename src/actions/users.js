import 'whatwg-fetch'
import {
   FETCH_USERS,
   SUNSURFERS_API
} from '../constants'


export function fetchUsers (options) {
  return dispatch => {
    // TODO: handle errors
    fetch(`${SUNSURFERS_API}/users`)
       .then(res => res.json())
       .then(res => dispatch({
         type: constants.FETCH_USERS,
         users: res
       }))
  }
}