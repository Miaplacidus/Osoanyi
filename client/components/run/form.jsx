import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '21',
      level: 8,
      duration: 16,
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTimeChange(event) {
    this.setState({ time: event.target.value });
  }

  handleLevelChange(event) {
    this.setState({ level: event.target.value });
  }

  handleDurationChange(event) {
    this.setState({ duration: event.target.value });
  }

  handleSubmit() {
    const run = {
      time: this.state.time,
      level: this.state.level,
      duration: this.state.duration,
    };
    this.props.onRunAdd(run);
  }

  render(state) {
    return (
      <div>
        <div>Add a run</div>
        <form>
          <label htmlFor="time">Time</label>
          <input
            type="text"
            id="time"
            name="time"
            value={this.state.time}
            onChange={this.handleTimeChange}
          />
          <label htmlFor="level">Level (enter minutes per mile)</label>
          <input
            type="number"
            id="level"
            name="level"
            value={this.state.level}
            onChange={this.handleLevelChange}
          />
          <label htmlFor="duration">Duration (enter minutes per mile)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={this.state.duration}
            onChange={this.handleDurationChange}
          />
          <input type="button" onClick={this.handleSubmit} />
        </form>
        <div>
          {this.state.time}
        </div>

        <div>
          {this.state.level}
        </div>

        <div>
          {this.state.duration}
        </div>

        <div>
          {this.state.duration / this.state.level} miles
        </div>
      </div>
    );
  }
}
