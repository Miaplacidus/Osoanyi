import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Runs extends Component {
  render() {
    const runs = this.props.runs.map((run, i) =>
      <li key={i}>
        {run.time}
      </li>
    );
    return (
      <div>
        <ul>
          {runs}
        </ul>
      </div>
    );
  }
}
