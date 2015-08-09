import React from 'react'

//import UserStore from '../../stores/users.js'
//import { fetchOnUpdate } from '../../decorators'

import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'

import usersActions from '../../actions/users.action.js'
import ArrInTable from '../dumb/arrInTable'



import constants, {
   FETCH_USERS
} from '../../constants'

// dirty hack for full load, if users exist from /profile
var firstLoad = true;

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
    var message;

    if (!users || users.length === 0) {
      actions[FETCH_USERS]();
      return (<div>Loading...</div>)
    } else if (firstLoad) {
      actions[FETCH_USERS]();
      firstLoad = false;
      message = (<div>Loading more users...</div>)
    }

    return (
       <div>
         {message || null}
         <ArrInTable primary="id">{users}</ArrInTable>
       </div>
    )
  }
}