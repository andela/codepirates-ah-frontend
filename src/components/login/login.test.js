import React from 'react';
import { shallow, mount } from 'enzyme';
import { Login, mapStateToProps } from '.';

const state = {
  user: { message: '', status: 200, token: 'mckndjvjdsfv' },
};

const renderComponent = (args) => {
  const defaultProps = {
    loginAction: jest.fn(() => new Promise((resolve) => {
      const res = {
        payload: {
          status: 404,
        },
      };
      return resolve(res);
    })),
    message: '',
    loading: 0,
    history: {
      push: jest.fn(),
    },
    location: {
      state: '',
    },
  };
  const props = { ...defaultProps, ...args };
  return shallow(<Login {...props} />);
};

describe('Login', () => {
  it('should test login with 200 status', () => {
    const wrapper = renderComponent({ status: 200 });
    expect(wrapper).toHaveLength(1);
  });
  it('should test login with loading true', () => {
    const wrapper = renderComponent({ loading: true });
    expect(wrapper).toHaveLength(1);
  });
  it('should test login', () => {
    const wrapper = renderComponent();
    mapStateToProps(state);
    expect(wrapper).toHaveLength(1);
  });
  it('should form when with username', () => {
    const wrapper = renderComponent({ message: 'hello world' });
    const username = wrapper.find('TextInput[name="username"]');
    const password = wrapper.find('TextInput[name="password"]');
    const form = wrapper.find('#login-form');

    username.simulate('change', {
      target: {
        name: 'username',
        value: 'username',
      },
    });
    password.simulate('change', {
      target: {
        name: 'password',
        value: '',
      },
    });
    form.simulate('submit', {
      preventDefault: jest.fn(),
    });
    expect(wrapper).toHaveLength(1);
  });
  it('should form when with email and empty password', () => {
    const wrapper = renderComponent({ message: 'hello world' });
    const username = wrapper.find('TextInput[name="username"]');
    const password = wrapper.find('TextInput[name="password"]');
    const form = wrapper.find('#login-form');

    username.simulate('change', {
      target: {
        name: 'username',
        value: 'aaaa@bbb.ccc',
      },
    });
    password.simulate('change', {
      target: {
        name: 'password',
        value: '',
      },
    });
    form.simulate('submit', {
      preventDefault: jest.fn(),
    });
    expect(wrapper).toHaveLength(1);
  });
  it('should form when there is no error', () => {
    const wrapper = renderComponent({ message: 'hello world' });
    const username = wrapper.find('TextInput[name="username"]');
    const password = wrapper.find('TextInput[name="password"]');
    const form = wrapper.find('#login-form');

    username.simulate('change', {
      target: {
        name: 'username',
        value: 'aaaa@bbb.ccc',
      },
    });
    password.simulate('change', {
      target: {
        name: 'password',
        value: 'ASqw1233',
      },
    });
    form.simulate('submit', {
      preventDefault: jest.fn(),
    });
    expect(wrapper).toHaveLength(1);
  });
});

describe('LOGIN TEST WITH MOUNT', () => {
  const wrapper = mount(<Login />);
  wrapper.setProps({ loading: 0 });
  it('should render the whole page', () => {
    expect(wrapper.length).toEqual(1);
  });
});
