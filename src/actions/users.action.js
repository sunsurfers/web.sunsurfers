import api from '../core/api'
import _ from 'lodash'
import constants, {
   FETCH_USERS,
   SUNSURFERS_API
} from '../constants'



const ajaxErrorCatcher = function(res){
  const json = res.json();
  console.error('ajax error:', json);
  return json;
}

const actionsMap = {
  [FETCH_USERS]: function fetchUsers(options) {
    return function (dispatch) {
      return api.get(`${SUNSURFERS_API}/users`).then(function(users){
        dispatch({
          type: FETCH_USERS,
          users: users
        })
      }, ajaxErrorCatcher)
    }
  }
};



export default actionsMap