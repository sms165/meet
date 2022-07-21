import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations, checkToken, getAccessToken} from "./api";
import "./nprogress.css";
import { WarningAlert } from "./Alert";
import WelcomeScreen from "./WelcomeScreen";
import { Toggle } from "./Toggle";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import EventGenre from "./EventGenre";


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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  }



  render() {
    

    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

    return (
      <div className="App">
        <br/>
        {<Toggle />}
        <br/>
        <h1>Event App</h1>
        {!navigator.onLine && <><div className="offline">
          <WarningAlert text="The app is offline, events may not be up to date." /> </div></>
        }
      
       
        <div className="search-bar">
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          
          <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        </div>
        <div className="data-vis-section">
          <br/>
          <h4 className="data-vis-title">Events in each city:</h4>
        <div className="data-vis-wrapper">
        <EventGenre events={this.state.events} />
        <ResponsiveContainer height={400}>
        <ScatterChart
         
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city"  />
          <YAxis type="number" dataKey="number" name="number of event" allowDecimals={false} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter  data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        </ResponsiveContainer>
        </div>
        </div>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} 
 getAccessToken={() => { getAccessToken() }} />
  
      </div>
    );
  }
}

export default App;
