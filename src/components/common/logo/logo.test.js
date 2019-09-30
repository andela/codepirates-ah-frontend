import React from 'react';
import { shallow } from 'enzyme';
import Logo from '.';

describe('Login', () => {
  it('should test logo component', () => {
    shallow(<Logo />);
  });
});
