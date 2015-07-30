import {get, post} from '../core/api'

import {
   FETCH_USERS
} from '../constants'

const initialState = {
  list: []
};

const actionsMap = {
  [FETCH_USERS]: function(state, action){
    return {
      list: action.users
    }
  }
};

export default function users (state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return Object.assign({}, state, reduceFn(state, action))
}
