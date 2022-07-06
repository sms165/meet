import React, { Component } from "react";

class NumberOfEvents extends Component {
  //define class component state
  state = {
    numberOfEvents: 32,
  };

  //event handler for <input> change event
  handleInputChange = (event) => {
    const value = parseInt(event.target.value);

    this.props.updateEvents(null, value);
    this.setState({ numberOfEvents: value });
  };

 
  render() {
    return (
      <div className="numberOfEvents">
        <p>Number of Events:</p>
        <input
          type="text"
          className="events-number"
          onChange={this.handleInputChange}
          value={this.state.numberOfEvents}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
