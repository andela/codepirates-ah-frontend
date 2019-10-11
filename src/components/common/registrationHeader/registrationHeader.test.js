import React from 'react';
import { shallow } from 'enzyme';
import RegistrationHeader from '.';

const renderComponent = (args) => {
  const defaultProps = {
    title: '',
  };
  const props = { ...defaultProps, ...args };
  return shallow(<RegistrationHeader {...props} />);
};
describe('RegistrationHeader', () => {
  it('should test or and RegistrationHeader component', () => {
    const component = renderComponent({ title: 'hello world' });
    expect(component).toHaveLength(1);
  });
});
