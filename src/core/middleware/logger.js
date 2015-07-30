// todo: to utils or lodash
function without(hash, nokey){
  const newHash = {};
  for (var key in hash) {
    if (key !== nokey) {
      newHash[key] = hash[key]
    }
  }
  return newHash;
}


export default function loggerMiddleware (next) {
  return action => {
    console.log('[ACTION]', action.type, '|', without(action, 'type'));
    next(action)
  }
}
