import React, { Component } from 'react';
import '../style.css';
export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: 0,
      index: this.props.index
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ q: this.state.q + 1 })}
          className="add"
        >
          Add
        </button>
      </div>
    );
  }
}
