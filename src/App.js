import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all" 
  };

  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }


  updateEvents = (location, eventCount) => {
    // const { currentLocation, numberOfEvents } = this.state; 
    if (location === undefined) {
      location = this.state.currentLocation;
  }
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
  } else(
      this.setState({ numberOfEvents: eventCount })
  )
 
  getEvents().then((events) => {
    let locationEvents = location === "all" ?
        events :
        events.filter((event) => event.location === location);
    this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        currentLocation: location,
    });
})
}


  render() {
    return (
      <div className="App">
        <h1>Event App</h1>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        /><br/><NumberOfEvents  updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        
      </div>
    );
  }
}

export default App;
