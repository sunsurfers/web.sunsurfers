import React, {PropTypes} from 'react'
import {Link} from 'react-router'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import {connect} from 'redux/react'
import {bindActionCreators} from 'redux'
import find from 'lodash/collection/find'
import map from 'lodash/collection/map'

import {chatActions} from '../../actions'

import Input from 'react-bootstrap/lib/Input'
import {socket} from '../../Root'


import throttle from 'lodash/function/throttle'

const prefixes = {
  'public': '#',
  'private': '##',
  'direct': '@'
};

const emitServerAboutTyping = throttle(() => socket.emit('i am typing'), 3000)

@connect(function (state, props) {
  return {
    messages: state.messages,
    typing_users: state.users.typing_users,
    online_users: state.users.online_users,
    online: state.chat.connected
  }
})

export default class Chat extends React.Component {
  constructor (props, childrens) {
    super(props, childrens);
    this.state = {
      draft: undefined
    }
  }
  render() {
    const {
       messages,
       typing_users,
       online_users,
       online
       } = this.props;

    //const actions = bindActionCreators(chatActions, this.props.dispatch);
    const {channelName} = this.props.params;

    const messageList = this.props.children
       ? React.cloneElement(this.props.children, {messages, typing_users})
       : (<b>hey man! choose room or person for speaking</b>);

    return (
       <div>
         <div><b style={{color: online ? 'green' : 'red'}}>#{channelName}</b></div>
         <div>online: {online_users.join(', ')}</div>
         <hr style={{marginTop: 8}}/>

         {messageList}
         <div style={{position: 'absolute', bottom: 0, left: '5%', width: '90%'}}>
           <Input ref="input"
                  type='textarea'
                  label={'Write message to ' + channelName + ':'}
                  onChange={(ev) => this.setState({draft: ev.currentTarget.value})}
                  onKeyUp={this.onKeyUp.bind(this)}
                  value={this.state.draft}
              />
         </div>
       </div>
    );
  }

  onKeyUp(ev) {
    ev.stopPropagation();

    if (ev.key === 'Enter') {
      ev.preventDefault();

      socket.emit('i send the message', {
        content: ev.currentTarget.value
      });

      this.setState({
        draft: ''
      });
    } else {
      // научить бы его фильтровать только осмысленные наборы ))
      emitServerAboutTyping()
    }
  }
}

/*
 <Grid fluid={true}>
 <Row>
 <Col md={4}>
 <ul>
 {map(channels, c => (<li key={c.name}>
 <Link to={"/chat/" + c.name}>
 {prefixes[c.type]}{c.name} ({c.countOfMessages})
 </Link>
 </li>))}
 </ul>
 </Col>
 <Col md={8}>
 {messageList}
 </Col>
 </Row>
 </Grid>*/
