import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import shuffle from 'lodash/collection/shuffle'

export default class Wrapper extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    /* цвета айфончика ['red', 'green', 'blue', 'yellow', 'white'] */
    const screen = {
      height: 1138,
      width: 555,
      hBorder: 0.1027,
      vBorder: 0.1538
    };

    const screenSize = {
      top: screen.height * screen.vBorder,
      left: screen.width * screen.hBorder,
      width: screen.width - ((screen.width * screen.hBorder) * 2),
      height: screen.height - ((screen.height * screen.vBorder) * 2)
    };

    return (
       <div className='container'>
         <ul className="list-inline" style={{marginTop: '10px'}}>
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/users">Users</Link></li>
           <li><Link to="/profile/rogozhnikoff"> rogozhnikoff</Link>,
               <Link to="/profile/marathasanov"> marathasanov</Link>,
               <Link to="/profile/marinkanamaste"> marinkanamaste</Link>
           </li>
           <li><Link to="/chat/sunsurfers">CHAT</Link></li>
         </ul>

         <div style={{width: screen.width, height: screen.height, margin: '0 auto', position: 'relative'}}>
           <object type="image/svg+xml"
                   data='/img/iphone-5c-portrait.svg?theme=iphone-5c-yellow'></object>
           <div style={{background: 'white', position: 'absolute', ...screenSize}}>
             <div style={{margin: 3}}>
              {this.props.children}
             </div>
           </div>
         </div>
       </div>
    )
  }
}

//<li><Link to="/signin">sign in</Link></li>
//<li><Link to="/signup">sign up</Link></li>

//<li><Link to="/auth/signin">Signin</Link></li>