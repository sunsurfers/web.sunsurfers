import React from 'react'

//import UserStore from '../../stores/users.js'
import { connect } from 'redux/react'
import _, {map} from 'lodash'
import { bindActionCreators } from 'redux'

import { fetchOnUpdate } from '../../decorators'
import usersActions from '../../actions/users.action.js'


import constants, {
   FETCH_USERS,
} from '../../constants'

//import api from '../core/api.js'
//import map from 'lodash/collection/map'

//import userStore from '../store/user'
//import userActions from '../action/user'
//import Reflux from 'reflux'
import {Table} from 'react-bootstrap'


@connect(function(state, props){
  return {
    users: state.users.list
  }
})

export default class Users extends React.Component {
  render () {
    const {dispatch} = this.props;
    const actions = bindActionCreators(usersActions, dispatch);

    const {users} = this.props;

    if (!users || users.length === 0) {
      actions[FETCH_USERS]();
      return (<div>Loading...</div>)
    }

    return (<Table striped bordered condensed hover responsive>
      <thead>
      <tr>
        {Object.keys(users[0]).map(function (key) {
          return (<th key={key}>{key}</th>)
        })}
      </tr>
      </thead>
      <tbody>{map(users, function (user) {
        return (<tr key={user.id}>
          {map(user, function (value, key) {
            return (<td key={key}>{value}</td>)
          })}
        </tr>)
      })}</tbody>
    </Table>)
  }
}