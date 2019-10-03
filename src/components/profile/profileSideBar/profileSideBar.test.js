import React from 'react';
import { shallow } from 'enzyme';
import ProfileSideBar from './profileSideBar';

describe('Test ProfileSideBar  component', () => {
  it('renders ProfileSideBar without crashing', () => {
    shallow(<ProfileSideBar />);
  });
});
