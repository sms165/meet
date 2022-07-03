import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

//test react components
//scope called App via describe
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