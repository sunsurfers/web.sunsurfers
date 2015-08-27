import {get, post} from '../core/api'

import {
   FETCH_USERS,
   FETCH_USER
} from '../constants'

const initialState = {
  list: [],
  typing_users: [],
  online_users: []
};

const usersHandlers = {
  [FETCH_USER] (state, action) {
    return {
      list: state.list.concat([action.user])
    }
  },
  [FETCH_USERS] (state, action) {
    return {
      list: action.users
    }
  },
  ['typing-users changed'] (state, action) {
    return {
      typing_users: action.typing_users
    }
  },
  ['online-users changed'] (state, action) {
    return {
      online_users: action.online_users
    }
  }
};

export default function users (state = initialState, action) {
  if(typeof action !== 'undefined') {
    const reduceFn = usersHandlers[action.type];
    if (!reduceFn) return state;
    return Object.assign({}, state, reduceFn(state, action));
  } else {
    return state;
  }
}
