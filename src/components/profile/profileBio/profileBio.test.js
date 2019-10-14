import React from 'react';
import { shallow } from 'enzyme';
import ProfileBio from './profileBio';

const renderProfileBio = (args) => {
  const defaultProps = {
    onFormSubmit: jest.fn(),
    onInputChange: jest.fn(),
    bio: 'Sample bio',
    bioEditMode: true,
    onUpdatingBio: jest.fn(),
  };
  const props = { ...defaultProps, ...args };
  return shallow(<ProfileBio {...props} />);
};

describe('Test ProfileSideBar  component', () => {
  it('renders ProfileSideBar without crashing', () => {
    const wrapper = renderProfileBio();
    expect(wrapper).toHaveLength(1);
  });
});
