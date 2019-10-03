import React from 'react';
import { shallow } from 'enzyme';
import ProfileCard from './profileCard';

describe('Test ProfileSideBar  component', () => {
  it('renders ProfileSideBar without crashing', () => {
    const defaultProps = {
      onFormSubmit: jest.fn(),
      image: 'https://res.cloudinary.com/habinezadalvan/image/upload/v1570437713/ykwnc68vk3nx1odrqwlz.jpg',
      onInputChange: jest.fn(),
      profileCardEditMode: false,
      onEditModeChange: jest.fn(),
      username: 'minega',
    };
    const props = { ...defaultProps };
    const wrapper = shallow(<ProfileCard {...props} />);
    expect(wrapper).toHaveLength(1);
  });
  it('renders ProfileSideBar without crashing', () => {
    const defaultProps = {
      onFormSubmit: jest.fn(),
      image: 'https://res.cloudinary.com/habinezadalvan/image/upload/v1570437713/ykwnc68vk3nx1odrqwlz.jpg',
      onInputChange: jest.fn(),
      profileCardEditMode: true,
      onEditModeChange: jest.fn(),
      username: 'minega',
    };
    const props = { ...defaultProps };
    const wrapper = shallow(<ProfileCard {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
