import {get, post} from '../core/api'

import uniqueId from 'lodash/utility/uniqueId'
import shuffle from 'lodash/collection/shuffle'



const messagesHandlers = {
  ['messages added'] (state, action) {
    return state.concat(action.messages)
  }
};

const initialState = [];

export default function messages(state = initialState, action) {
  if(typeof action !== 'undefined') {
    const reduceFn = messagesHandlers[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action)
  } else {
    return state
  }
}

//
// createChannel(undefined, 'sunsurfers', 'public', undefined)
//function createChannel(id = uniqueId('channel_'), name, type = 'public', messages = []) {
//  return {
//    id: id,
//    name: name || shuffle(['girls', 'boys', 'transgenders'])[0],
//    type: type, // public, private, direct
//    messages: [{
//      from: uniqueId('user_'),
//      fromName: 'marathasanov',
//      date: new Date().getTime(),
//      content: 'Hello chat!'
//    }]
//  }
//}