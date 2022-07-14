import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  //define class component state
  state = {
    numberOfEvents: 32,
    infoText: "",
  };

  //event handler for <input> change event
  handleInputChange = (event) => {
    const value = parseInt(event.target.value);

    this.props.updateEvents(undefined, value);
    this.setState({ numberOfEvents: value });
   

    if(value < 0 || value > 32){
      this.setState({
        numberOfEvents: value,
        infoText:'Please enter a number between 1 and 32.'
      });
    }else{
      return  this.setState({
        numberOfEvents: value,
        infoText:''
    });
  }
};

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.infoText} />
        <p>Number of Events:</p>
        <input
          type="number"
          className="events-number"
          onChange={this.handleInputChange}
          value={this.state.numberOfEvents}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
