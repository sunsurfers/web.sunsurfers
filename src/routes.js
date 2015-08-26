import React from "react"
import { Redirect, Router, Route } from "react-router"

import {
   Wrapper
} from "./components"

import {
   Home,
   Users,
   Profile,
   Signin,
   Signup,
   Chat,
   ChatChannel,
   Register
} from "./components/page"


export default function (history) {
  return (
     <Router history={history}>
       <Route component={Wrapper}>
         <Route path="home" component={Home} />
         <Route path="users" component={Users} />
         <Route path="profile/:nickname" component={Profile}/>

         <Route path="signin" component={Signin} />
         <Route path="signup" component={Signup} />
         <Route path="register" component={Register} />

         <Route path="chat" component={Chat}>
            <Route name="channel" path=":channelName" component={ChatChannel} />
         </Route>


         <Redirect from="/" to="home" />
       </Route>
     </Router>
  )
}
