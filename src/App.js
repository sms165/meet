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
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
  } else(
      this.setState({ numberOfEvents: eventCount })
  )
  if (location === undefined) {
      location = this.state.currentLocation;
  }
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
  // const { currentLocation, numberOfEvents } = this.state;
  //   if (location) {
  //     getEvents().then((response) => {
  //       const locationEvents =
  //         location === "all"
  //           ? response.events
  //           : response.events.filter((event) => event.location === location);
  //       const events = locationEvents.slice(0, numberOfEvents);
  //       return this.setState({
  //         events: events,
  //         currentLocation: location,
  //         locations: response.locations,
  //       });
  //     });
  //   } else {
  //     getEvents().then((response) => {
  //       const locationEvents =
  //         currentLocation === "all"
  //           ? response.events
  //           : response.events.filter(
  //               (event) => event.location === currentLocation
  //             );
  //       const events = locationEvents.slice(0, eventCount);
  //       return this.setState({
  //         events: events,
  //         numberOfEvents: eventCount,
  //         locations: response.locations,
  //       });
  //     });
  //   }
  // };



 
  

  render() {
    return (
      <div className="App">
        <p>hello</p>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        /><NumberOfEvents  updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        
      </div>
    );
  }
}

export default App;
