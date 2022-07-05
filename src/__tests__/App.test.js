import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

//test react components 
//scope called App via describe
//unit tests
describe('<App /> component', () => {

    let AppWrapper;
    beforeAll(() =>{
        AppWrapper = shallow(<App />)
    })

    test('render list of events', () => {
        // const AppWrapper = shallow(<App />);
        expect(AppWrapper.find(EventList)).toHaveLength(1);
      });
      test('render CitySearch', () => {
        // const AppWrapper = shallow(<App />);
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
      });
      test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
      });
      

});

//integration tests
describe('<App /> integration',()=>{

  test('App passes "events" state as a prop to EventList', ()=>{
    //render the component and its children
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');

    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    //rendering mounts the component in the DOM, therefore it needs to be unmounted or "cleaned up"
    AppWrapper.unmount();
  })

})