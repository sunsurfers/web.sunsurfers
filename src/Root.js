import React, { PropTypes } from 'react'
import { createDispatcher, createRedux, composeStores } from 'redux'
import { Provider } from 'redux/react'

import { loggerMiddleware, thunkMiddleware } from './core/middleware'

import * as stores from './stores'
import renderRoutes from './routes'

const dispatcher = createDispatcher(
   composeStores(stores),
      getState => [thunkMiddleware(getState), loggerMiddleware]
);

const redux = createRedux(dispatcher);

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

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
