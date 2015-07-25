import {
   FETCH_USERS
} from '../constants'

const initialState = {
  users: []
}

const actionsMap = {
  [FETCH_USERS]: (state, action) => ({ users: action.users })
}

export default function users (state = initialState, action) {
  const reduceFn = actionsMap[action.type]

  if (!reduceFn) return state

  return Object.assign({}, state, reduceFn(state, action))
}
