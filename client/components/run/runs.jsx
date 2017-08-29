import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Runs extends Component {
  render() {
    const runs = this.props.runs.map((run, i) =>
      <dl key={i}>
        <dt>Time</dt>
        <dd>
          {run.time}
        </dd>
        <dt>Duration</dt>
        <dd>
          {run.duration}
        </dd>
        <dt>Level</dt>
        <dd>
          {run.level}
        </dd>
      </dl>
    );
    return (
      <div>
        {runs}
      </div>
    );
  }
}
