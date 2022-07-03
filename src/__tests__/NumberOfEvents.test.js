import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('render textbox', () => {
    expect(NumberOfEventsWrapper.find('.events-number')).toHaveLength(1);
  });

  test('user can change the number of events', () => {
    NumberOfEventsWrapper.find('.events-number').simulate('change', {
      target: { value: 10 },
    });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(10);
  });

 
});

