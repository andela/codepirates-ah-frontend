import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import BookmarkObject, { Bookmark } from './bookmark';
import store from '../../../__mocks__/store';

describe('Search test', () => {
  const renderBookmark = (args) => {
    const defaultProps = {
      slug: 'fakeslug',
      articleId: 1,
      history: {
        push: jest.fn(),
      },
      createBookmark: jest.fn(),
      deleteBookmark: jest.fn(),
    };
    const props = { ...defaultProps, ...args };
    return mount(<Bookmark {...props} />);
  };
  it('renders Profile without crashing', () => {
    const wrapper = renderBookmark();
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate handleUpdateBio when bioEditMode equals false function', () => {
    const wrapper = renderBookmark();
    const btnBookmark = wrapper.find('.bookmark').first();
    btnBookmark.simulate('click');
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate handleUpdateBio when bioEditMode equals false function', () => {
    localStorage.setItem('fakeslug', 'isBookmarked');
    localStorage.setItem('token', 'faketoken');
    const wrapper = renderBookmark();
    const btnBookmark = wrapper.find('.bookmark').first();
    btnBookmark.simulate('click');
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate handleUpdateBio when bioEditMode equals false function', () => {
    localStorage.setItem('fakeslug', 'isBookmarked');
    localStorage.setItem('token', 'faketoken');
    const wrapper = renderBookmark();
    wrapper.setState({
      isBookmarked: false,
    });
    const btnBookmark = wrapper.find('.bookmark').first();
    btnBookmark.simulate('click');
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate the map state to props method', () => {
    const wrapper = mount(<Router><Provider store={store}><BookmarkObject /></Provider></Router>);
    expect(wrapper).toHaveLength(1);
  });
});
