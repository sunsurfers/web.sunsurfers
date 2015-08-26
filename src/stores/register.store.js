import _ from 'lodash'

const initialState = {
  message: null,
  errorFields: [],
  status: null
};

export default function(state = initialState, action){ // -> state
  if(action.type === 'register-field is unvalid') {
    const errorFields = state.errorFields.indexOf(action.refName) !== -1
      ? state.errorFields
      : state.errorFields.concat([action.refName]);

    return {
      ...state,
      errorFields: errorFields,
      message: 'Fields ' + errorFields.join(', ') + ' is unvalid'
    }
  } else if(action.type === 'register-field is valid') {
    const errorFields = _.filter(state.errorFields, (refName) => refName !== action.refName);

    return {
      ...state,
      errorFields: errorFields,
      message: errorFields.length ? 'Fields ' + errorFields.join(', ') + ' is unvalid' : null
    }
  }

  return state
}