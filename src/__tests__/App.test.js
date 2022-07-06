import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";
import { extractLocations, getEvents } from "../api";

//test react components
//scope called App via describe
//unit tests
describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    // const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
  test("render CitySearch", () => {
    // const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
  test("render NumberOfEvents", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

});

//integration tests
describe("<App /> integration", () => {
  // let AppWrapper;
  //   beforeEach(() => {
  //       AppWrapper = mount(<App />)
  //   })
  //   afterEach(() => {
  //       AppWrapper = AppWrapper.unmount()
  //   })

  test('App passes "events" state as a prop to EventList', () => {
    //render the component and its children
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state("events");

    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    //rendering mounts the component in the DOM, therefore it needs to be unmounted or "cleaned up"
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state("locations");

    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );

    AppWrapper.unmount();
  });


  test("get list of events matching the city selected by the user", async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state("suggestions");
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state("events")).toEqual(eventsToShow);

    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find(".suggestions li");
    await suggestionItems.at(suggestionItems.length - 1).simulate("click");
    const allEvents = await getEvents();
    expect(AppWrapper.state("events")).toEqual(allEvents);
    AppWrapper.unmount();
  });


  test('pass number of events as 32 per default', () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsState = AppWrapper.state('numberOfEvents');
    expect(NumberOfEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(32);
    AppWrapper.unmount();
  });

  test('change numberOfEvents state when the number of events changes', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.find('.events-number').simulate('change', { target: { value: 5 } });
    expect(AppWrapper.state('numberOfEvents')).toEqual(5);
    AppWrapper.unmount();
  })
});
