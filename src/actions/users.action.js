import api from '../core/api'
import ajaxErrorCatcher from '../core/util/ajaxErrorCatcher'
import constants, {
   FETCH_USERS,
   SUNSURFERS_API
} from '../constants'


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