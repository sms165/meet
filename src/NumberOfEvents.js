import React, { Component } from 'react';

class NumberOfEvents extends Component {
    //define class component state
    state = { 
        numberOfEvents:''
}

    //event handler for <input> change event
    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ numberOfEvents: value });
        
};

    //event handler for click
    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion
    });
  }
  render() {
    return (
      <div className="numberOfEvents">
          <p>Number of Events:</p>
          <input type="text" className="events-number" value={this.state.numberOfEvents} onChange={this.handleInputChanged} />
         
      </div>
    );
  }
}

export default NumberOfEvents;