// todo: use 'whatwg-fetch' - ready for use ajax + promise + its a standart

var transport = require('superagent');
var Promise = require('promise');
/*
 * Use like:
 *   require('./api')
 *     .get('/users', {id: 42})
 *     .then(
 *       function resolve(data, response){},
 *       function reject(err, response) {}
 *     )
 * */

var log = [];
function showLog(fromEnd = true) {
  return fromEnd
     ? log.reverse()
     : log;
}

function makeAjax(type) {
  return function (path, extra) {
    log.push({
      type, path, extra
    });

    return new Promise(function (resolve, reject) {
      transport[type](path)
         .send(extra || {})
         .end(function (err, res) {
           if (err == null) {
             resolve(res.body, res);
           } else {
             reject(err, res);
             console.error('some problem with query', [err, res], [path, extra]);
           }
         });
    });
  }
}

module.exports = {
  showLog: showLog,

  get: makeAjax('get'),
  post: makeAjax('post')
  // ... put, delete, other things
};