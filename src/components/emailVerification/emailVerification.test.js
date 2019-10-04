import React from 'react';
import { shallow } from 'enzyme';
import EmailVerification from './emailVerification';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<EmailVerification />);
  });
});
