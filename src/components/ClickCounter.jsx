import React, { Component } from 'react';
import { render } from 'react-dom';

class ClickCounter extends React.Component {
  render() {
    return React.createElement(
      "button",
      {
        onClick: this.props.handler,
        className: "btn btn-danger" },
      
      this.props.counter,
      
    );
  }
}

export default ClickCounter;