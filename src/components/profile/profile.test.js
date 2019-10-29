import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Profile } from './profile';
import createStore from '../../redux/store/index';

const renderProfile = (args) => {
  const defaultProps = {
    fetchProfile: jest.fn(),
    history: {},
    profile: {
      bio: 'Sample bio',
      username: 'minega',
      image: 'minega.jpg',
    },
    updateProfile: jest.fn(),
    pending: false,
  };
  const props = { ...defaultProps, ...args };
  return mount(
    <Provider store={createStore}>
      <Profile {...props} />
    </Provider>,
  );
};

describe('Test Profile  component', () => {
  it('renders Profile without crashing', () => {
    const wrapper = renderProfile();
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate handleUpdateBio when bioEditMode equals false function', () => {
    const wrapper = renderProfile();
    const btnUpdate = wrapper.find('button.btn-update');
    btnUpdate.simulate('click', {});
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate handleProfileCardUpdate when profileCardEditMode is false function', () => {
    const wrapper = renderProfile();
    const btnEdit = wrapper.find('button.btn-edit');
    btnEdit.simulate('click', {});
    expect(wrapper).toHaveLength(1);
  });

  it('should update state on componentWillReceiveProps stage', () => {
    const wrapper = renderProfile();
    wrapper.setProps({ profile: { bio: 'updated bio' } });
    expect(wrapper).toHaveLength(1);
  });
});
