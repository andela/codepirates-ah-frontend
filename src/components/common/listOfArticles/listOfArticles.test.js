import React from 'react';
import { shallow } from 'enzyme';
import ListOfArticles from '.';
import articlesArr from '../../../__mocks__/mockedArticlesArray';

const renderComponent = (args) => {
  const props = { ...args };
  return shallow(<ListOfArticles {...props} />);
};

describe('List of articles', () => {
  it('render a list of articles component', () => {
    const component = renderComponent({
      articles: articlesArr,
      limitArticlesNumber: 4,
    });
    expect(component).toMatchSnapshot();
  });
});
