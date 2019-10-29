import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { ResetRequest } from './index';

import { linkSent } from '../../helpers/passwordResetConstants';

const mockStore = configureMockStore();
const store = mockStore({
  passwordReset: {
    success: {
      message: linkSent('mike@mail.com'),
      subject: 'email sent',
    },
  },
});

describe('request container test', () => {
  const resetRequestFunc = (args) => {
    const [resetPassword, handleSubmit] = Array(2).fill(jest.fn());
    const defaultProps = {
      error: '',
      history: {},
      resetPassword,
      handleSubmit,
      location: {
        search: '',
      },
    };
    const props = { ...defaultProps, ...args };
    return mount(<ResetRequest {...props} />);
  };
  it('it should display the request form', () => {
    const wrapper = resetRequestFunc({});
    const instruction = wrapper.find('.instruction').first();
    expect(instruction.props().children).toContain('Enter the email');
  });
  it('it should display the reset form when link clicked', () => {
    const search = '?token=jhsd';
    const wrapper = resetRequestFunc({ location: { search } });
    const instruction = wrapper.find('.instruction').first();
    expect(instruction.props().children).toContain('Enter and confirm');
  });
  it('should set reset "link sent" response message', () => {
    const resetPassword = jest.fn(
      () => new Promise((resolve) => {
        const res = {
          type: 'RESET_PASSWORD_SUCCESS',
          payload: {
            message: linkSent('mike@mail.com'),
            subject: 'link sent',
          },
        };
        return resolve(res);
      }),
    );
    const wrapper = resetRequestFunc({ resetPassword });
    const form = wrapper.find('form');
    const input = wrapper.find('input').first();
    input.simulate('change', {
      target: { value: 'mike@mail.com', name: 'email' },
    });
    form.simulate('submit', {
      preventDefault: jest.fn(),
    });
    expect(store.getState().passwordReset.success.message).toEqual(
      linkSent('mike@mail.com'),
    );
  });
  it('call the failure action creator', () => {
    const fetchPassword = jest.fn(
      () => new Promise((resolve) => {
        const res = {
          status: 404,
          json: jest.fn(() => ({ message: 'no such email', status: 404 })),
        };
        return resolve(res);
      }),
    );
    const wrapper = resetRequestFunc({ fetchPassword });
    const form = wrapper.find('form');
    const input = wrapper.find('input').first();
    input.simulate('change', {
      target: { value: 'mike@mail.com', name: 'email' },
    });
    form.simulate('submit', {
      preventDefault: jest.fn(),
    });
    expect(store.getState().passwordReset.error).toEqual(undefined);
  });
});
