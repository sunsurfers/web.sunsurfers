import React from 'react'

//import UserStore from '../../stores/users.js'
import { connect } from 'redux/react'

import { bindActionCreators } from 'redux'

import { fetchOnUpdate } from '../../decorators'
import usersActions from '../../actions/users.action.js'
import ArrInTable from '../dumb/arrInTable'



import constants, {
   FETCH_USERS,
} from '../../constants'

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

    return (<ArrInTable primary="id">{users}</ArrInTable>)
  }
}