import React from 'react';
import { mount } from 'enzyme';

import { ResetRequest, mapStateToProps, mapDispatch } from './index';

describe('request container test', () => {
  const resetRequestFunc = (args) => {
    const defaultProps = {
      message: '',
      email: '',
      status: '',
      formData: {},
      location: {
        search: '',
      },
      responseMessage: jest.fn(),
      handleSubmit: jest.fn(),
    };
    const props = { ...defaultProps, ...args };
    return mount(<ResetRequest {...props} />);
  };
  it('test 1', () => {
    const wrapper = resetRequestFunc({});
    const btn = wrapper.find('button[id="req-btn"]');
    btn.simulate('click', {});
    expect(wrapper).toHaveLength(1);
  });
  it('test 2', () => {
    const wrapper = resetRequestFunc({});
    const form = wrapper.find('form');
    const input = wrapper.find('input').first();
    input.simulate('change', {
      target: { value: 'mike@mail.com', name: 'email' },
    });

    form.simulate('submit', {
      preventDefault: jest.fn(),
    });
    expect(wrapper).toHaveLength(1);
  });
  it('test 3', () => {
    const responseMessage = jest.fn(() => Promise.resolve({
      ok: true,
      json: jest.fn(() => Promise.resolve({
        message: 'hello',
      })),
    }));
    const wrapper = resetRequestFunc({
      summary: jest.fn(),
      formData: jest.fn(),
    });
    wrapper.instance().onSendRequest('sent', 'done', responseMessage);
    const form = wrapper.find('form');
    form.simulate('submit', {
      preventDefault: jest.fn(),
    });
  });
});

describe('Test mapstate and mapdispatch', () => {

});
