import React from 'react'

export default class Icon extends React.Component {
  render () {
    var {type} = this.props;
    if (!type) {
      return
    }
    var className = "glyphicon glyphicon-" + type;

    return (
        <span className={className} aria-hidden="true" />
    );
  }
}