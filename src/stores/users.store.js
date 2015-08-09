import {get, post} from '../core/api'

import {
   FETCH_USERS,
   FETCH_USER
} from '../constants'

const initialState = {
  list: []
};

const actionsMap = {
  [FETCH_USER] (state, action) {
    return {
      ...state,
      list: state.list.concat([action.user])
    }
  },
  [FETCH_USERS] (state, action) {
    return {
      ...state,
      list: action.users
    }
  }
};

export default function users (state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return Object.assign({}, state, reduceFn(state, action))
}
