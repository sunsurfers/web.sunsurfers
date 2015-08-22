import React from 'react'
import moment from 'moment'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

export default class ChatChannel extends React.Component {
  render() {
    const {
       typing_users,
       messages
    } = this.props;

    //if (!messages) {
    //  return (<h2>Error: channel "{channelName}" not found in local store</h2>)
    //}

    var typingUsersBlock = typing_users.length === 0 ? null : (<div>
      {typing_users.join(', ')}
      {typing_users.length > 1 ? ' набирают сообщения...' : ' набирает сообщение...'}
    </div>);

    // как узнать что один из классов мой? ;)
    // bsStyle={success, info, warning, danger}
    return (
       <div style={{position: 'relative'}}>
         <div style={{overflow: 'scroll', position: 'absolute', top: '30%', width: '100%'}}>
             {messages.map((m, i) => (<ListGroupItem key={i}>
               <div>{m.content}</div>
               <div style={{fontSize: 10}}><b>{m.from}</b> — {moment(m.date).calendar().toLowerCase()}</div>
             </ListGroupItem>))}
         </div>
         {typingUsersBlock}
       </div>
    )
  }
}