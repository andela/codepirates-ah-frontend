import React from 'react';
import { shallow } from 'enzyme';
import Privacy from './privacy';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Privacy />);
  });
});
