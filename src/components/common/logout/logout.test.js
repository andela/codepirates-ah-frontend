
import { shallow } from 'enzyme';
import React from 'react';
import Logout from './logout';

describe('Logout Component', () => {
  it('Should logout user', () => {
    window.location.assign = jest.fn();
    shallow(<Logout />);
    expect(window.location.assign).toBeCalledWith('/');
  });
});
