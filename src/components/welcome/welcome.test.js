import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './welcome';

const props = { location: { state: '' }, history: {} };


describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Welcome {...props} />);
  });
});
