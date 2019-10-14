import React from 'react';
import { shallow } from 'enzyme';
import { EmailVerification, mapStateToProps } from './emailVerification';

describe('First React component test with Enzyme', () => {
  const state = {

  };

  const componentFunc = (args) => {
    const defaultProps = {
      verifyAccount: jest.fn(),
      location: {
        search: '?token=token',
      },
      history: {
        push: jest.fn(),
      },
    };

    const props = { ...defaultProps, ...args };
    return shallow(<EmailVerification {...props} />);
  };
  it('renders without crashing', () => {
    const wrapper = componentFunc({});
    const btn = wrapper.find('button[id="visit-home-btn"]');
    btn.simulate('click', {});
    expect(wrapper).toHaveLength(1);
  });
  it('renders without crashing', () => {
    const wrapper = componentFunc({
      location: {
        search: '?token=',
      },
    });
    mapStateToProps(state);
    expect(wrapper).toHaveLength(1);
  });
});
