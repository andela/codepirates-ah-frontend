import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './notFound';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<NotFound />);
  });
});
