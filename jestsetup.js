/* eslint-disable */
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

Enzyme.configure({ adapter: new Adapter() });

window.store = configureStore([thunk])({});

// Add commonly used methods and objects as globals
global.React = React;
global.render = Enzyme.render;
global.shallow = shallow;
global.mount = mount;
