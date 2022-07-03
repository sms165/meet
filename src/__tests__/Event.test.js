import React from 'react';
import {
    shallow
} from 'enzyme';
import Event from '../Event';
import {
    mockData
} from '../mock-data';

describe('<Event /> component', () => {
            let EventWrapper;
            beforeAll(() => {
                    EventWrapper = shallow( < Event event = {
                            mockData[0]
                        }
                        />)
                    });

                test('render event', () => {
                    expect(EventWrapper.find('.event')).toHaveLength(1);
                })

                test('render event title/summary', () => {
                    expect(EventWrapper.find('.title')).toHaveLength(1);
                })

                test('render start time', () => {
                    expect(EventWrapper.find('.start-time')).toHaveLength(1);
                });

                test('render location', () => {
                    expect(EventWrapper.find('.location')).toHaveLength(1);
                });

                test('render description', () => {
                    expect(EventWrapper.find('.description')).toHaveLength(1);
                });

                test('render button to show details',()=>{
                    expect(EventWrapper.find('.btn-details')).toHaveLength(1);
                })

                test('make details visible on click',() => {
                    EventWrapper.setState({visible:false});
                    EventWrapper.find('.btn-details').simulate('click');
                    expect(EventWrapper.state('visible')).toBe(true);
                });

                test('hide details on click', () => {
                    EventWrapper.setState({visible:true});
                    EventWrapper.find('.btn-details').simulate('click');
                    expect(EventWrapper.state('visible')).toBe(false);
                })
                

                //test with mock data

                test('show event title',() =>{
                    expect(EventWrapper.find('.title').text()).toEqual(mockData[0].summary);
                });

                test('show event description',() =>{
                    expect(EventWrapper.find('.description').text()).toEqual(mockData[0].description)
                });

                test('show event start time',()=>{
                    expect(EventWrapper.find('.start-time').text()).toEqual(mockData[0].start.dateTime)
                });

                test('show event location',()=>{
                    expect(EventWrapper.find('.location').text()).toEqual(mockData[0].location)
                });
            });