import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './navbar';

describe('test navbar component', () => {
  it('should test the navbar component', () => {
    shallow(<NavBar />);
  });
});
