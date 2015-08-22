import api from '../core/api'
import ajaxErrorCatcher from '../core/util/ajaxErrorCatcher'

import constants, {
   SUNSURFERS_API
} from '../constants'

const fromServerEvents = {
  'messages added' (messages) {
    return {
      type: 'messages added',
      messages: messages
    }
  },
  'typing-users changed' (typingUsersNicknames) {
    return {
      type: 'typing-users changed',
      typing_users: typingUsersNicknames
    }
  },
  'online-users changed' (onlineUsersNicknames) {
    return {
      type: 'online-users changed',
      online_users: onlineUsersNicknames
    }
  },
  /*'channels changed' () {
  },*/
  'connect' () {
    return {
      type: 'chat connecting',
      connected: true
    }
  },
  'disconnect' () {
    return {
      type: 'chat connecting',
      connected: false
    }
  }
};

export default fromServerEvents