import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Search, { SearchDetail } from './search';
import store from '../../__mocks__/store';

describe('Search test', () => {
  const renderSearchDetail = (args) => {
    const defaultProps = {
      fetchSearch: jest.fn(),
      history: {},
    };
    const props = { ...defaultProps, ...args };
    return mount(<SearchDetail {...props} />);
  };

  it('should render application without crashing', () => {
    const wrapper = renderSearchDetail();
    wrapper.setState({
      query: {},
      searchResults: {
        searchResults: {
          foundTags: [{ name: 'tag1' }, { name: 'tag2' }],
          foundUsers: [{ username: 'codepirate', bio: 'sample bio', images: { 0: 'image1' } }],
          foundArticles: [{ slug: 'aaa', title: 'ddd' }, { slug: 'bbb', title: 'eee' }],
        },
      },
    });
    expect(wrapper).toHaveLength(1);
  });
  it('should render tags found', () => {
    const wrapper = renderSearchDetail();
    wrapper.setState({
      query: {},
      searchResults: {
        searchResults: {
          foundTags: [{ name: 'tag1' }, { name: 'tag2' }],
          foundUsers: [{ username: 'codepirate', bio: 'sample bio', images: { 0: 'image1' } }],
          foundArticles: [{ slug: 'aaa', title: 'ddd' }, { slug: 'bbb', title: 'eee' }],
        },
      },
    });
    expect(wrapper.find('.tag')).toHaveLength(2);
  });
  it('should render users found', () => {
    const wrapper = renderSearchDetail();
    wrapper.setState({
      searchResults: {
        searchResults: {
          foundTags: [{ name: 'tag1' }, { name: 'tag2' }],
          foundUsers: [{ username: 'codepirate', bio: 'bio', image: null }, { username: 'codepirate1', bio: 'bio1', image: null }],
          foundArticles: [],
        },
      },
    });
    expect(wrapper.find('#codepirate')).toHaveLength(1);
    expect(wrapper.find('#codepirate1')).toHaveLength(1);
  });
  it('should simulate the handlechange instance method', () => {
    const wrapper = renderSearchDetail();
    const search = wrapper.find('input[type="text"]');
    const fakeFunc = jest.fn();
    fakeFunc.mockReturnValue({
      searchResults: {
        foundTags: [{ name: 'tag1' }, { name: 'tag2' }],
        foundUsers: [{ username: 'codepirate', bio: 'sample bio', images: { 0: 'image1' } }],
        foundArticles: [{ slug: 'aaa', title: 'ddd' }, { slug: 'bbb', title: 'eee' }],
      },
    });
    wrapper.setProps({
      fetchSearch: fakeFunc,
    });
    search.simulate('change', {
      target: {
        name: 'query',
        value: 'React',
      },
    });
    search.simulate('change', {
      target: {
        name: 'query',
        value: '',
      },
    });
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate the handlechange instance method', () => {
    const wrapper = mount(<Provider store={store}><Search /></Provider>);
    expect(wrapper).toHaveLength(1);
  });
});
