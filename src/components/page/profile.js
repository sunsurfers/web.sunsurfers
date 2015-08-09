import React from 'react'

import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'

import usersActions from '../../actions/users.action.js'
import find from 'lodash/collection/find'
import map from 'lodash/collection/map'

import constants, {
   FETCH_USER
} from '../../constants'

@connect(function(state, props){
  const {nickname} = props.params;
  return {
    user: find(state.users.list, (user) => user.nickname === nickname)
  }
})

export default class Profile extends React.Component {
  render () {
    const {user, dispatch} = this.props,
          {nickname} = this.props.params,
          actions = bindActionCreators(usersActions, dispatch);

    if (!user) {
      actions[FETCH_USER](nickname);
      return (<div>Loading {nickname}...</div>)
    }

    return (<div>
      <ul>
        {map(user, (v, k) => <li key={k}><b>{k}:</b> {v}</li>)}
      </ul>
    </div>)
  }
}