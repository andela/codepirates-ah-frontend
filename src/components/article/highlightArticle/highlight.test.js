import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import ViewArticle from '../index';

global.fetch = require('node-fetch');

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  viewArticle: {
    data: {
      slug: '',
    },
  },
});

describe('Test highlighting', () => {
  const highlightFunc = (args) => {
    const [selectContent, handleSubmit, createHighlightAction] = Array(
      3,
    ).fill(jest.fn());
    const defaultProps = {
      viewSingleArticle: jest.fn(),
      geter: jest.fn(
        () => Promise.resolve(
          { status: 200, data: { slug: 'fake', body: '<p>fake body one</p>' } },
        ),
      ),
      slug: '',
      handleSubmit,
      selectContent,
      createHighlightAction,
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
      location: {
        root: 'https://codepirates.com',
        pathname: '/article/fakeslug',
      },
    };
    const props = { ...defaultProps, ...args };
    return mount(
      <Provider store={store}>
        <ViewArticle {...props} />
      </Provider>,
      { context: { store } },
    );
  };
  it('should display action buttons', () => {
    const wrapper = highlightFunc();
    const create = wrapper.find('.highlightActions').first();
    expect(wrapper.length).toBe(1);
  });
});
