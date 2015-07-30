var React = require('react');
var {RouteHandler, Link} = require('react-router');
var Logo = require('../component/logo');

var userStore = require('../store/user');
var Reflux = require('reflux');

export default class About extends React.Component {
  mixins: [
    Reflux.listenTo(userStore, 'userStoreHandle')
  ],
  userStoreHandle: function(dataFromStore) {
    this.setState(dataFromStore);
  },

  render: function () {
    var styles = {
      width: 350,
      margin: '0 auto'
    };


    var authorised =  (this.state ? this.state.authorised : false).toString();

    return (
        <div style={styles}>
          <Logo style={{display: 'block', margin: '0 auto 15px', width: '150px'}}/>
          authorised: {authorised}
          <RouteHandler />
        </div>
    )
  }
}