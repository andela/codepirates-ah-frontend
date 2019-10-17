
import { shallow } from 'enzyme';
import React from 'react';
import { VerifyAuth, mapStateToProps } from './verifyAuth';

describe('Veryfy Component', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      isLoggedIn: true,
      history: {
        location: {
          pathname: '/',
          search: '?code=AQAPIlsvSDwnrFLR2dVc34scL5kf2Ijmm5zYOo',
        },
      },
      socialAuth: jest.fn(),
    };
    wrapper = shallow(<VerifyAuth {...props} />);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should redirect to home if authenticate is true', () => {
    const redirect = wrapper.find('Fragment');
    expect(redirect.length).toEqual(1);
  });
  it('should not redirect to home if authenticate is not true', () => {
    wrapper.props({
      isLoggedIn: false,
    });
    const redirect = wrapper.find('Redirect');
    expect(redirect.length).toEqual(1);
  });

  it('should call componentDidMount for facebook auth', () => {
    wrapper.setProps({
      location: {
        pathname: '/auth/facebook',
        search: '?socialToken=AQAPIlsvsv',
      },
    });
    wrapper.instance().componentDidMount();
  });
  it('should call componentDidMount for google auth', () => {
    const spy = jest.spyOn(props, 'socialAuth');
    wrapper.setProps({
      location: {
        pathname: '/auth/google',
        search: '?socialToken=AQAPIlsvsv',
      },
    });
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
  it('should call componentDidMount for google auth', () => {
    const spy = jest.spyOn(props, 'socialAuth');
    wrapper.setProps({
      location: {
        pathname: '/auth/none',
        search: '?socialToken=AQAPIlsvsv',
      },
    });
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should call componentDidMount for twitter auth', () => {
    const spy = jest.spyOn(props, 'socialAuth');
    wrapper.setProps({
      location: {
        pathname: '/auth/twitter',
        search: '?socialToken=AQAPIlsvsv',
      },
    });
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should return false for checkAuthType', () => {
    expect(wrapper.instance().checkAuthType('fake')).toEqual('false');
  });
});

describe('## VerifyAuth Dispatch functions', () => {
  const state = {
    user: {},
  };

  it('should be map state to props', () => {
    expect(mapStateToProps(state)).toEqual({
      ...state.user,
    });
  });
});
