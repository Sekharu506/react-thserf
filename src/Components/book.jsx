import React, { Component } from 'react';

import '../style.css';

export default class Book extends React.Component {
  render() {
    return (
      <div>
        <br />

        <img className="image" src={this.props.l} alt="book1" />
      </div>
    );
  }
}
