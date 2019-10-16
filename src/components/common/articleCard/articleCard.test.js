import React from 'react';
import { shallow } from 'enzyme';
import ArticleCard from '.';

const renderComponent = (args) => {
  const defaultProps = {
    readTime: '',
    userIcon: '',
    username: '',
    createdTime: '',
    userIcone: '',
    title: '',
    views: 0,
  };
  const props = { ...defaultProps, ...args };
  return shallow(<ArticleCard {...props} />);
};

describe('Article card component', () => {
  it('should render article card component', () => {
    const component = renderComponent({
      readTime: '1 mins',
      userIcon: 'icon',
      username: 'username',
      createdTime: 'an hour ago',
      title: 'title',
      views: 0,
    });
    expect(component).toHaveLength(1);
  });
});
