import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'redux/react'
import {Input, Button, Alert} from 'react-bootstrap'

import {registerActions} from '../../actions'
import _ from 'lodash'

@connect(function(stores, props){
  return {
    message: stores.register.message,
    status: stores.register.status,
    errorFields: stores.register.errorFields
  }
})

export default class Register extends React.Component {
  collectFormAndSend(actionMethod) {
    return (function(ev){
      ev.preventDefault();

      actionMethod({
        email: this.refs.email.value,
        nickname: this.refs.nickname.value,
        password: this.refs.password.value
      })
    }).bind(this)
  }
  render () {
    const actions = bindActionCreators(registerActions, this.props.dispatch);


    if(this.props.status === 'success') {
      return this.transitionTo('/home')
    }

    const message = this.props.message ? (<Alert bsStyle="danger">{this.props.message}</Alert>) : null;

    const {errorFields} = this.props

    const getBsStyle = (key) => errorFields.indexOf(key) !== -1 ? 'error' : null

    return (<div>
      {message}

      <form onSubmit={this.collectFormAndSend(actions.onSubmit)} noValidate>
        <Input label="Email" type="email"
          ref="email" onBlur={actions.onBlur.bind(null, 'email')} bsStyle={getBsStyle('email')} />
        <Input label="Nickname" type="text"
          ref="nickname" onBlur={actions.onBlur.bind(null, 'nickname')} bsStyle={getBsStyle('nickname')} />
        <Input label="Password" type="password"
          ref="password" onBlur={actions.onBlur.bind(null, 'password')}  bsStyle={getBsStyle('password')} />


        <Button type="submit">Send</Button>
      </form>
    </div>);
  }
};