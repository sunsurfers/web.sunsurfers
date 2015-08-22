import React, { PropTypes } from 'react'
import { createDispatcher, createRedux, composeStores } from 'redux'
import { Provider } from 'redux/react'

import each from 'lodash/collection/each'
//import toArray from 'lodash/lang/toArray'

import { loggerMiddleware, thunkMiddleware } from './core/middleware'

import * as stores from './stores'
import renderRoutes from './routes'

import logger from 'redux-logger';

const dispatcher = createDispatcher(
   composeStores(stores),
      getState => [
        thunkMiddleware(getState),
        //loggerMiddleware,
        logger({getState})
      ]
);

const redux = createRedux(dispatcher);



/** SOCKET INIT */
import { bindActionCreators } from 'redux'
import io from 'socket.io-client'
import {chatActions} from './actions'

const bindedChatActions = bindActionCreators(chatActions, redux.dispatch);
const socket = io.connect('http://localhost:8888');

// bind to messages from server
each(bindedChatActions, function(actionMethod, actionName){
  socket.on(actionName, function(){
    console.log('[SOCKET] "' + actionName + '", with arguments:', arguments);
    actionMethod.apply(null, arguments)
  });
});

export { socket }
/** END: SOCKET INIT */



export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const {history} = this.props;
    return (
       <Provider redux={redux}>
         {renderRoutes.bind(null, history)}
       </Provider>
    )
  }
}


/*
 <Route path="stargazers" component={GithubStargazers}>
 <Route name='repo' path=':username/:repo' component={GithubRepo} />
 <Route name='user' path=':username' component={GithubUser} />
 </Route>
 */
