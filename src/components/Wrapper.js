import React, {PropTypes} from 'react'
import {Link} from 'react-router'

export default class Wrapper extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
       <div className='container'>
         <ul className="nav nav-pills" style={{marginTop: '10px'}}>
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/users">Users</Link></li>
           <li><Link to="/profile/rogozhnikoff">rogozhnikoff</Link></li>
           <li><Link to="/profile/marathasanov">marathasanov</Link></li>
           <li><Link to="/profile/marinkanamaste">marinkanamaste</Link></li>
         </ul>

         {this.props.children}
       </div>
    )
  }
}


//<li><Link to="/auth/signin">Signin</Link></li>