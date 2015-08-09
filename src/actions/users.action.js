import api from '../core/api'
import ajaxErrorCatcher from '../core/util/ajaxErrorCatcher'
import constants, {
   FETCH_USERS,
   FETCH_USER,
   SUNSURFERS_API
} from '../constants'


const actionsMap = {
  [FETCH_USER] (nickname) {
    return function (dispatch) {
      return api.get(`${SUNSURFERS_API}/user/${nickname}`).then(function(user){
        dispatch({
          type: FETCH_USER,
          user: user
        })
      }, ajaxErrorCatcher)
    }
  },

  [FETCH_USERS] (options) {
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