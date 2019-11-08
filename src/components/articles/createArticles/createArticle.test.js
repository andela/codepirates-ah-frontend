import React from 'react';
import { shallow } from 'enzyme';
import { CreateArticles, mapStateToProps } from './createArticles';

const isArticleCreated = true;
describe('Test React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<CreateArticles />);
  });
});
const state = {
  article: { message: '', status: 201 },
};

const renderComponent = (args) => {
  const defaultProps = {
    createArticlesAction: jest.fn(
      () => new Promise((resolve) => {
        const res = {
          payload: {
            status: 400,
          },
        };
        return resolve(res);
      }),
    ),
  };
  const props = { ...defaultProps, ...args };
  return shallow(<CreateArticles {...props} />);
};

describe('Create an Article', () => {
  it('should test create article with 201 status', () => {
    const wrapper = renderComponent({ status: 201 });
    expect(wrapper).toHaveLength(1);
  });

  it('should test Create Article', () => {
    const wrapper = renderComponent();
    mapStateToProps(state);
    expect(wrapper).toHaveLength(1);
  });
  it('should test Create Articles with 201 status', () => {
    const wrapper = renderComponent({ status: 201 });
    expect(wrapper).toHaveLength(1);
  });
});
describe('Create an Article test with', () => {
  const wrapper = shallow(<CreateArticles />);
  wrapper.setProps({ loading: 0 });
  it('should render the whole page', () => {
    expect(wrapper.length).toEqual(1);
  });
});
