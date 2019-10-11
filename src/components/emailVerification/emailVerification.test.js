import React from 'react';
import { shallow } from 'enzyme';
import { EmailVerification } from './emailVerification';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    const componentFunc = (args) => {
      const defaultProps = {
        verifyAccount: jest.fn(),
        location: {
          search: 'dsdsdsdsdsdsdsdsdsd',
        },
      };

      const props = { ...defaultProps, ...args };
      return shallow(<EmailVerification {...props} />);
    };
    componentFunc({});
  });
});
