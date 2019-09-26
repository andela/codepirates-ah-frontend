import React from 'react';
import { shallow } from 'enzyme';
import TestPage from '../src/components/testpage';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<TestPage />);
  });
});
