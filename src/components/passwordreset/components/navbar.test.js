import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './navbar';

describe('test button component', () => {
  it('should test the button component', () => {
    shallow(<NavBar name="email" type="email" handleChange={() => ''} />);
  });
});
