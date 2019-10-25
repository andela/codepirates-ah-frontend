import React from 'react';
import { shallow } from 'enzyme';
import RatingArticleCardComponent from '.';

describe('article card rating part component', () => {
  it('should render article card rating part component', () => {
    const component = shallow(<RatingArticleCardComponent />);
    expect(component).toHaveLength(1);
  });
});
