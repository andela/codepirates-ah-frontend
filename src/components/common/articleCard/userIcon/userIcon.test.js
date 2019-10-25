import React from 'react';
import { shallow } from 'enzyme';
import UserIcon from '.';

const renderComponent = (args) => {
  const defaultProps = {
    readTime: '',
    userIcon: '',
    username: '',
    createdTime: '',
    userIcone: '',
  };
  const props = { ...defaultProps, ...args };
  return shallow(<UserIcon {...props} />);
};

describe('User Icone component', () => {
  it('should user Icon component', () => {
    const component = renderComponent({
      readTime: '',
      userIcon: '',
      username: '',
      createdTime: '',
    });
    expect(component).toHaveLength(1);
  });
});
