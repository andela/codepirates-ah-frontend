import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '.';

const renderComponent = (args) => {
  const defaultProps = {
    title: '',
    name: '',
    label: '',
    value: '',
  };
  const props = { ...defaultProps, ...args };
  return shallow(<SubmitButton {...props} />);
};

describe('SubmitButton', () => {
  it('should test or and SubmitButton component', () => {
    const component = renderComponent({
      title: 'hello world', name: 'you', label: 'here', value: 'submit',
    });
    expect(component).toHaveLength(1);
  });
});
