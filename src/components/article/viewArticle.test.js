import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  LeftSideBar, RightSideBar,
} from './viewArticleComponents';
import { ViewArticle } from './index';

describe('LeftSideBar component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<LeftSideBar />);
  });
});
describe('RightSideBar component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<RightSideBar />);
  });
});
describe('RecentArticles component test with Enzyme', () => {
  const componentFunc = (args) => {
    const defaultProps = {
      viewArticle: jest.fn(),
      getAllArticles: jest.fn(),
      match: {
        params: {
          slug: 'slug',
        },
      },
      history: {
        push: jest.fn(),
      },
      params: {
        slug: 'slug',
      },
    };
    const props = { ...defaultProps, ...args };
    return mount(<ViewArticle {...props} />);
  };
  componentFunc();
  it('it should update state on component will receive props', () => {
    const wrapper = componentFunc();
    wrapper.setProps({
      getArticle: {
        data: {
          slug: '',
          title: '',
          description: '',
          body: '',
          readtime: '',
          createdAt: '',
          author: { firstname: '', lastname: '', image: '' },
        },
      },
    });
    expect(wrapper).toHaveLength(1);
  });
});
