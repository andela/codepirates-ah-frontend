/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import UpdateArticles from '.';
import updateArticleAction, {
  successfulUpdate,
  failedUpdate,
} from '../../redux/actions/updateArticle';
import updateArticleReducer from '../../redux/reducers/updateArticle';
import { UPDATE_ARTICLE_FAILURE, UPDATE_ARTICLE_SUCCESS } from '../../redux/actions/actionTypes';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  updateArticle: {
    success: '',
    error: '',
  },
});

global.MutationObserver = class {
  // eslint-disable-next-line no-useless-constructor
  // eslint-disable-next-line no-empty-function
  constructor(callback) {}

  disconnect() {}

  observe(element, initObject) {}

  takeRecords() {
    return [];
  }
};
global.document.getSelection = () => {};

const oldArticle = jest.fn(() => Promise.resolve({
  status: 200,
  message: 'article retrieved',
  data: {
    slug: 'fakeslug',
    title: 'faketitle1',
    description: '<p>fakedescription1</p>',
    body: '<p>fakebody1</p>',
    images: ['image'],
    taglist: [],
  },
}));
const newArticle = jest.fn(() => Promise.resolve({
  status: 200,
  message: 'article updated',
  data: {
    slug: 'fakeslug updated',
    title: 'faketitle1 updated',
    description: '<p>fakedescription1</p> updated',
    body: '<p>fakebody1</p> updated',
    images: ['image'],
    taglist: [],
  },
}));
describe('Test update article', () => {
  const updateFunc = (args) => {
    const [
      getArticle,
      update,
      setState,
      updateArticle,
      showWiget,
      handleChange,
      handleSubmit,
      componentDidMount,
    ] = Array(8).fill(jest.fn());
    const defaultProps = {
      getArticle,
      handleChange,
      updateArticle,
      update,
      setState,
      showWiget,
      handleSubmit,
      componentDidMount,
      location: {
        pathname: '/updatearticle/fakeslug',
      },
    };
    const props = { ...defaultProps, ...args };
    return mount(
      <Provider store={store}>
        <UpdateArticles {...props} />
      </Provider>,
      { context: { store } },
    );
  };
  it('should pre-load target article', async () => {
    const getArticle = oldArticle;
    const wrapper = updateFunc({ getArticle });
    await wrapper
      .find('UpdateArticles')
      .instance()
      .componentDidMount();
    expect(wrapper.find('UpdateArticles').instance().state.slug).toEqual(
      'fakeslug',
    );
  });
  it("should update an article's title", async () => {
    const updateArticle = newArticle;
    const handleSubmit = jest.fn();
    const wrapper = updateFunc({ updateArticle, handleSubmit });
    wrapper
      .find('UpdateArticles')
      .instance()
      .handleSubmit();
    expect(store.getState().updateArticle.success).toBe('');
  });
  it('should set the state', () => {
    const wrapper = updateFunc();
    const submit = wrapper.find('#submit');
    const description = wrapper.find('#description');
    const title = wrapper.find('.title').first();
    const body = wrapper.find('.md-form').first();
    const deleteCover = wrapper.find('.cover-image-div').first();
    title.simulate('change', { target: { value: 'anguandia', name: 'title' } });
    body.simulate('change', 'anguandia');
    description.simulate('change', {
      target: { value: 'description1', name: 'description' },
    });
    expect(wrapper.find('UpdateArticles').instance().state.title).toEqual(
      'anguandia',
    );
    expect(wrapper.find('UpdateArticles').instance().state.description).toEqual(
      'description1',
    );
    deleteCover.simulate('click', {});
    expect(wrapper.find('UpdateArticles').instance().state.images).toEqual([
      '',
    ]);
  });
});
