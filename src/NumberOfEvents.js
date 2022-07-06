import React, { Component } from 'react';

class NumberOfEvents extends Component {
    //define class component state
    state = { 
        numberOfEvents: 32
}

    //event handler for <input> change event
    handleInputChange = (event) => {
        const value = parseInt(event.target.value);
       
    this.props.updateEvents(null, value);
    this.setState({ numberOfEvents: value });

    if (value < 1) {
      this.setState({
        infoText: "Select number from 1 to 32",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  };

    //event handler for click
//     handleItemClicked = (suggestion) => {
//         this.setState({
//             query: suggestion
//     });
//   }
  render() {
    return (
      <div className="numberOfEvents">
          <p> text={this.state.infoText}</p>
          <p>Number of Events:</p>
          <input type="text" className="events-number"  onChange={this.handleInputChange}
          value={this.state.numberOfEvents} />
         
      </div>
    );
  }
}

export default NumberOfEvents;