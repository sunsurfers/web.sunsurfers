import React from 'react';
import BrowserHistory from 'react-router/lib/BrowserHistory'
import HashHistory from 'react-router/lib/HashHistory'
import Root from './Root'

// Use hash location for Github Pages
// but switch to HTML5 history locally.
const history = process.env.NODE_ENV === 'production' ?
   new HashHistory() :
   new BrowserHistory();

document.addEventListener('DOMContentLoaded', function () {
  React.render(<Root history={history}/>, document.body)
});

//import actions from './actions'
//window.actions = actions;


import './styles/index.css';
import '!style!css!less!bootstrap/less/bootstrap.less';