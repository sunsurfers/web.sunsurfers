import api from '../core/api'
import ajaxErrorCatcher from '../core/util/ajaxErrorCatcher'
import _ from 'lodash'

const checks = {
  'email': function(val){return val.indexOf('@') >= 0 && val.length < 255 && val.length > 4;},
  'password': function(val){return val.length !== 0 && val.length < 255 && val.length > 4},
  'nickname': function(val){return val.length !== 0 && val.length < 255 && val.length > 3}
};


export default {
  onBlur: function (refName, ev) {
    if(!checks[refName](ev.currentTarget.value)) {
      return {
        type: 'register-field is unvalid',
        refName: refName
      }
    } else {
      return {
        type: 'register-field is valid',
        refName: refName
      }
    }
  },
  onSubmit: function (data) {
    const errorsFields = _.filter(data, function(val, refName){
      return !checks[refName](val)
    });

    if(errorsFields.length) {
      const refNames = Object.keys(errorsFields);

      return {
        type: 'register warning',
        message: {
          content: 'Fields "' + refNames.join(', ') + '" is unvalid',
          refNames
        }
      }
    }

    return function(dispatch){
      api.post('/register', data).then(function(){
        dispatch({
          type: 'register success'
        })
      }, ajaxErrorCatcher)
    }
  }
}