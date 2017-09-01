import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './form.jsx';
import Runs from './runs.jsx';

export default class Osoanyi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runs: [],
    };

    this.handleRunAdd = this.handleRunAdd.bind(this);
  }

  handleRunAdd(run) {
    this.state.runs.push(run);
    this.setState({ runs: this.state.runs });
  }
  
  render(state) {
    return (
      <div>
        <h1>Osoanyi</h1>
        <Form onRunAdd={this.handleRunAdd} />
        <div>
          <Runs runs={this.state.runs} />
        </div>
      </div>
    );
  }
}
