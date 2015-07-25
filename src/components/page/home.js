import React from 'react'

export default class Home extends React.Component {
  render () {
    console.log('home page render:', this);
    return (<h1>Hello home!</h1>);
  }
}