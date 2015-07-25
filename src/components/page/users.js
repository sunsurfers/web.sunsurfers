import React from 'react'

//import {Table} from 'react-bootstrap'

//import api from '../core/api.js'
//import map from 'lodash/collection/map'

//import userStore from '../store/user'
//import userActions from '../action/user'
//import Reflux from 'reflux'


export default class Users extends React.Component {
  //constructor () {
  //  userActions.downloadUsers()
  //}

  render () {
    console.log('users page render:', this);
    //var {users} = this.state;

    //if (users == null) {
      return (<div>Loading...</div>)
    //}

  }
}
/*

return (<Table striped bordered condensed hover responsive >
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
</Table>);*/
