import React from 'react';
import { shallow } from 'enzyme';
import UserIconComponent from '.';

const renderComponent = (args) => {
  const defaultProps = {
    username: '',
    createAt: '',
    icon: '',
    comment: '',
  };
  const props = { ...defaultProps, ...args };
  return shallow(<UserIconComponent {...props} />);
};

describe('User Icon component for comment', () => {
  it('should test or and UserIconComponent', () => {
    const component = renderComponent({
      username: 'user',
      createAt: '2 mins ago',
      icon: 'image',
      userIcone: 'image2',
    });
    expect(component).toHaveLength(1);
  });
});
