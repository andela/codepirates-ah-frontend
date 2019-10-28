import React from 'react';
import { shallow } from 'enzyme';
import ArticleCardTextComponent from '.';

const renderComponent = (args) => {
  const defaultProps = {
    title: '',
    description: '',
    views: 0,
  };
  const props = { ...defaultProps, ...args };
  return shallow(<ArticleCardTextComponent {...props} />);
};

describe('Article card text part component', () => {
  it('should user Icon component', () => {
    const component = renderComponent({
      title: 'this is the title',
      description: 'description',
      views: 0,
    });
    expect(component).toHaveLength(1);
  });
});
