
import { shallow } from 'enzyme';
import React from 'react';
import { NavBar, mapStateToProps } from './navbar';

describe('Navbar Component', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      user: {
        isLoggedIn: true,
        profile: {
          username: '/',
          image: '?code=AQAPIlsvSDwnrFLR2dVc34scL5kf2Ijmm5zYOo',
        },
      },
      socialAuth: jest.fn(),
    };
    wrapper = shallow(<NavBar {...props} />);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should test login', () => {
    mapStateToProps(props);
    expect(wrapper).toHaveLength(1);
  });
  it('should find navbar ', () => {
    const Navbar = wrapper.find('Navbar');
    expect(Navbar.length).toEqual(1);
  });
  it('should find navbar dropdown', () => {
    wrapper.props({
      user: {
        isLoggedIn: true,
        profile: {
          username: 'salvi',
          image: '?socialToken=AQAPIlsvsv',
        },
      },
    });
    const NavDropdown = wrapper.find('NavDropdown');
    expect(NavDropdown.length).toEqual(1);
  });
});
