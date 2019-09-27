import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Routes />);
  });
});
