import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '.';

const renderComponent = (args) => {
  const defaultProps = {
    type: '',
    onChange: jest.fn(),
    name: '',
    label: '',
    value: '',

  };
  const props = { ...defaultProps, ...args };
  return shallow(<TextInput {...props} />);
};

describe('TextInput', () => {
  it('should test or and TextInput component', () => {
    const component = renderComponent({
      title: 'hello world', name: 'you', label: 'here', value: 'submit',
    });
    expect(component).toHaveLength(1);
  });
});
