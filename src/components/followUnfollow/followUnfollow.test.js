import React from 'react';
import { shallow, mount } from 'enzyme';
import Allfollowers from './AllfollowersComponent';
import Following from './following';
import FollowUserComponent from './followComponent';

describe('Test React component test with shallow', () => {
  it('renders without crashing', () => {
    shallow(<Allfollowers />);
  });
});
describe('Test React component test with shallow', () => {
  it('renders without crashing', () => {
    shallow(<Following />);
  });
});
describe('Test React component test with shallow', () => {
  it('renders without crashing', () => {
    shallow(<FollowUserComponent />);
  });
});
