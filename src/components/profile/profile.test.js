import React from 'react';
import { mount } from 'enzyme';
import { Profile } from './profile';

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
  return mount(<Profile {...props} />);
};

describe('Test Profile  component', () => {
  it('renders Profile without crashing', () => {
    const wrapper = renderProfile();
    expect(wrapper).toHaveLength(1);
  });

  it('should simulate handleChange function', () => {
    const wrapper = renderProfile();
    wrapper.setState({ profileCardEditMode: true, bioEditMode: true });
    const bio = wrapper.find('textarea');
    bio.simulate('change', {
      target: {
        name: 'bio',
        value: 'sample bio',
      },
    });
    const readURLMock = jest.fn();
    const input = {
      target: {
        type: 'file',
        name: 'image',
        files: {
          0: {
            name: 'image.jpeg',
          },
        },
      },
    };
    wrapper.instance().readURL = readURLMock;
    wrapper.update();
    const image = wrapper.find('input[type="file"]');
    image.simulate('change', {
      input,
    });
    expect(readURLMock).toHaveBeenCalledTimes(1);
    expect(wrapper).toHaveLength(1);
  });

  it('should test readURL instance', () => {
    const wrapper = renderProfile();
    const instance = wrapper.instance();
    const input = {
      type: 'file',
      name: 'image',
      files: {
        0: new Blob(),
      },
    };
    const read = instance.readURL(input);
    expect(read).toBe(undefined);
  });

  it('should simulate handleSubmit function', () => {
    const wrapper = renderProfile();
    wrapper.setState({ profileCardEditMode: true, bioEditMode: true });
    const form = wrapper.find('form.profileCardForm');
    form.simulate('submit', {});
    expect(wrapper).toHaveLength(1);
  });

  it('should simulate handleUpdateBio function', () => {
    const wrapper = renderProfile();
    wrapper.setState({ profileCardEditMode: true, bioEditMode: true });
    const btnCancel = wrapper.find('button.btn-cancel');
    btnCancel.simulate('click', {});
    expect(wrapper).toHaveLength(1);
  });

  it('should simulate handleUpdateBio when bioEditMode equals false function', () => {
    const wrapper = renderProfile();
    wrapper.setState({ profileCardEditMode: true, bioEditMode: false });
    const btnUpdate = wrapper.find('button.btn-update');
    btnUpdate.simulate('click', {});
    expect(wrapper).toHaveLength(1);
  });

  it('should simulate handleProfileCardUpdate function', () => {
    const wrapper = renderProfile();
    wrapper.setState({ profileCardEditMode: true, bioEditMode: false });
    const btnCancel = wrapper.find('button.btn-cancel-edit-card');
    btnCancel.simulate('click', {});
    expect(wrapper).toHaveLength(1);
  });

  it('should simulate handleProfileCardUpdate when profileCardEditMode is false function', () => {
    const wrapper = renderProfile();
    wrapper.setState({ profileCardEditMode: false, bioEditMode: false });
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
