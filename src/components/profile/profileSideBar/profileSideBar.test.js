import React from 'react';
import { shallow } from 'enzyme';
import ProfileSideBar from './profileSideBar';

describe('Test ProfileSideBar  component', () => {
  it('renders ProfileSideBar without crashing', () => {
    shallow(<ProfileSideBar />);
  });
  it('renders simulate click bio tab ', () => {
    const wrapper = shallow(<ProfileSideBar onChangeTab={jest.fn()} />);
    wrapper.find('.bio').simulate('click');
  });
  it('renders simulate click bio tab ', () => {
    const wrapper = shallow(<ProfileSideBar onChangeTab={jest.fn()} />);
    wrapper.find('.blogs').simulate('click');
  });
  it('renders simulate click bio tab ', () => {
    const wrapper = shallow(<ProfileSideBar onChangeTab={jest.fn()} />);
    wrapper.find('.reports').simulate('click');
  });
});
