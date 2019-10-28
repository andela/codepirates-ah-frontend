import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import SearchObject, { Search } from './search';
import store from '../../../__mocks__/store';

describe('Search test', () => {
  const renderSearch = (args) => {
    const defaultProps = {
      fetchSearch: jest.fn(),
      history: {},
    };
    const props = { ...defaultProps, ...args };
    return mount(<Search {...props} />);
  };

  it('should simulate on change instance method', () => {
    const wrapper = renderSearch();
    const fakeFunc = jest.fn();
    fakeFunc.mockReturnValue({
      searchResults: {
        foundTags: [{ name: 'tag1' }, { name: 'tag2' }],
        foundArticles: [{ slug: 'aaa', title: 'ddd' }, { slug: 'bbb', title: 'eee' }],
      },
    });
    wrapper.setProps({
      fetchSearch: fakeFunc,
    });
    const input = wrapper.find('input');
    input.simulate('change', {
      target: {
        name: 'query',
        value: 'Sample query',
      },
    });
    input.simulate('change', {
      target: {
        name: 'query',
        value: '',
      },
    });
    expect(wrapper).toHaveLength(1);
  });

  it('should change state', () => {
    const wrapper = renderSearch();
    const overLay = wrapper.find('#query');
    wrapper.setState({
      query: {},
      searchResults: {
        searchResults: {
          foundTags: [{ name: 'tag1' }, { name: 'tag2' }],
          foundArticles: [{ slug: 'aaa', title: 'ddd' }, { slug: 'bbb', title: 'eee' }],
        },
      },
    });
    overLay.simulate('focus');
    expect(wrapper.find('.list-group-item')).toHaveLength(2);
    expect(wrapper.find('.tag')).toHaveLength(2);
  });

  it('should change state', () => {
    const wrapper = renderSearch();
    const overLay = wrapper.find('#query');
    wrapper.setState({
      query: {},
      searchResults: {
        searchResults: {
          foundTags: [],
          foundArticles: [],
        },
      },
    });
    overLay.simulate('focus');
    expect(wrapper.find('.list-group-item')).toHaveLength(0);
    expect(wrapper.find('.tag')).toHaveLength(0);
  });

  it('should simulate the map state to props method', () => {
    const wrapper = mount(<Provider store={store}><SearchObject /></Provider>);
    expect(wrapper).toHaveLength(1);
  });
});
