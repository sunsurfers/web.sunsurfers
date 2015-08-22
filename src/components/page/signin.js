import React from 'react'
import Icon from '../dumb/icon'
import {Link} from 'react-router'

//import userActions from '../action/user'

export default class Singin extends React.Component {
  constructor (props) {
    // todo: if auth == true, redirect

    super(props)
  }
  send () {
    userActions.signIn({
      email: this.refs.email.getDOMNode().value.trim(),
      password: this.refs.password.getDOMNode().value.trim()
    });
  }

  render () {
    return (<div>
      <div className="input-group" style={{marginBottom: '20px'}}>
        <span className="input-group-addon" id="basic-addon1">
          <Icon type='envelope' />
        </span>
        <input type="text" className="form-control" placeholder="Email" ref="email" defaultValue="murad@sunserfers.ru"/>
      </div>

      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">
          <Icon type='star' />
        </span>
        <input type="password" className="form-control" placeholder="Пароль" ref="password" defaultValue="murad" />
      </div>

      <div className="checkbox">
        <label>
          <input type="checkbox" />
          Запомнить меня
        </label>
      </div>

      <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.send}>Войти</button>

      <Link to="/auth/signup">Создать профиль</Link>
      /
      <Link to="/auth/passrecover">Не помню пароль</Link>
    </div>);
  }
};