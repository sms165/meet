import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import "./nprogress.css";
import { WarningAlert } from "./Alert";
import WelcomeScreen from "./WelcomeScreen";
import { Toggle } from "./Toggle";


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all",
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    //make sure it is mounted before populating the state
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentDidUpdate(){
    
    let check= JSON.parse(localStorage.getItem("toggle-switch"));
    console.log(check)
    
    console.log(document.getElementById("toggle-switch"));
    document.getElementById("toggle-switch").checked = check;
    if (document.getElementById("pp")) {
      if (check === true) {

        document.body.classList.add("dark-theme");
        let pp = document.getElementById("pp");
        pp.classList.add("dark-theme");
        let ws = document.getElementById("ws");
        ws.classList.add("dark-theme");
        document.getElementById("image-bg").src = './assets/cartography-dark.svg';
        return localStorage.setItem("toggle-switch", "true")
      }

    } else if(check===true) {
      document.body.classList.add("dark-theme");
      
      return localStorage.setItem("toggle-switch", "true")
    }else{
      
      return localStorage.setItem("toggle-switch", "false")
    }
  }
    // });

    
  
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
    } else this.setState({ numberOfEvents: eventCount });

    getEvents().then((events) => {
      let locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        currentLocation: location,
      });
    });
  };

  // themeChange =()=>{
    
   
  //     document.body.classList.toggle("dark-theme");
    
  // }
  
  

  render() {
    

    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

    return (
      <div className="App">
        {<Toggle />}
        <h1>Event App</h1>
        {/* <Toggle /> */}
        {/* <button className="btn-toggle">Dark or Light theme</button> */}
        {/* <label class="switch">
  <input type="checkbox" className="toggle-switch" onClick={this.themeChange} />
  <span class="slider round"></span>
</label> */}


        {!navigator.onLine && (
          <WarningAlert infoText="The app is offline, events may not be up to date." />
        )}
        <div className="search-bar">
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          
          <NumberOfEvents updateEvents={this.updateEvents} />
        </div>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} 
 getAccessToken={() => { getAccessToken() }} />
  
      </div>
    );
  }
}

export default App;
