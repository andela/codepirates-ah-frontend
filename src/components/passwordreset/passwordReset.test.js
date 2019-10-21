import React from 'react';
import { mount } from 'enzyme';

import { ResetRequest } from './index';

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
      resetRequest: jest.fn(),
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
});
