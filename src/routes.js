import React from 'react'
import { Redirect, Router, Route } from 'react-router'

import {
   Wrapper
} from './components'

import {
   Home,
   Users
} from './components/page'


export default function (history) {
  return (
     <Router history={history}>
       <Route component={Wrapper}>
         <Route path="home" component={Home} />
         <Route path="users" component={Users} />

         <Redirect from="/" to="home" />
       </Route>
     </Router>
  )
}