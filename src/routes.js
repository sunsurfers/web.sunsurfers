import React from "react"
import { Redirect, Router, Route } from "react-router"

import {
   Wrapper
} from "./components"

import {
   Home,
   Users,
   Profile
} from "./components/page"


export default function (history) {
  return (
     <Router history={history}>
       <Route component={Wrapper}>
         <Route path="home" component={Home} />
         <Route path="users" component={Users} />
         <Route path="profile/:nickname" component={Profile}/>

         <Redirect from="/" to="home" />
       </Route>
     </Router>
  )
}