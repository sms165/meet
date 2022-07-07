import { loadFeature, defineFeature } from 'jest-cucumber'
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');



defineFeature(feature, test => {

  let AppWrapper;

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the list of events has been loaded', () => {
      AppWrapper = mount(< App />);
    });

    when('the user did not click the „Show Details“ yet', () => {
      AppWrapper.update();
    });

    then('the event elements are collapsed', () => {
      expect(AppWrapper.find('.description')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the list of events has been loaded', async () => {
      AppWrapper = await mount(< App />);
      expect(AppWrapper.find('.description')).toHaveLength(0);
    });

    when('the user clicks the button „show Details“', () => {
      AppWrapper.update();
      AppWrapper.find('.btn-details').at(0).simulate('click')

    });

    then('the event element should expand and show more information', () => {
      expect(AppWrapper.find('.description')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('event element is expanded and shows details', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update()
      AppWrapper.find('.btn-details').at(0).simulate('click');
      expect(AppWrapper.find('.description')).toHaveLength(1);
    });

    when('the user clicks the „hide details“ button', () => {
      AppWrapper.find('.btn-details').at(0).simulate('click');
    });

    then('the event element details should collapse', () => {
      expect(AppWrapper.find('.description')).toHaveLength(0);
    });
  });

});

