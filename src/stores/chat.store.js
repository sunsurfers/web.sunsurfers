const initialState = {
  connected: false
};

const chatHandlers = {
  'chat connecting' (state, action) {
    return {
      connected: action.connected || false
    }
  }
};

export default function chat (state = initialState, action) {
  const reduceFn = chatHandlers[action.type];
  if (!reduceFn) return state;
  return Object.assign({}, state, reduceFn(state, action))
}
