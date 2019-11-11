import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import DislikeObject, { Dislike } from './dislike';
import store from '../../../__mocks__/store';

describe('Dislike test', () => {
  const renderDislike = (args) => {
    const defaultProps = {
      dislikeArticle: jest.fn(),
      dislikeError: null,
      dislikes: 1,
      history: {
        push: jest.fn(),
      },
      getDislikes: jest.fn(),
    };
    const props = { ...defaultProps, ...args };
    return shallow(<Dislike {...props} />);
  };
  it('should should dislike an article', () => {
    const wrapper = renderDislike();
    expect(wrapper).toHaveLength(1);
  });
  it('should should render without crashing', () => {
    const wrapper = renderDislike();
    const dislikeButton = wrapper.find('.dislikeButton').last();
    dislikeButton.simulate('click');
    expect(wrapper).toHaveLength(1);
  });
  it('should should dislike an article', () => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwidmVyaWZpZWQiOnRydWUsImltYWdlIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vaGFiaW5lemFkYWx2YW4vaW1hZ2UvdXBsb2FkL3YxNTcyOTQyMzQ0L3RtdWlsMWNndnA3ZnBnaGl0a3B5LmpwZyIsImlhdCI6MTU3Mjk2MTk5NSwiZXhwIjoxNTczMDQ4Mzk1fQ.ZCzGn2hnB_mPFj7_WkVA3WJMKuUDTgQwNZbTNrijMcA');
    const wrapper = renderDislike();
    expect(wrapper).toHaveLength(1);
  });

  it('should should render without crashing', () => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwidmVyaWZpZWQiOnRydWUsImltYWdlIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vaGFiaW5lemFkYWx2YW4vaW1hZ2UvdXBsb2FkL3YxNTcyOTQyMzQ0L3RtdWlsMWNndnA3ZnBnaGl0a3B5LmpwZyIsImlhdCI6MTU3Mjk2MTk5NSwiZXhwIjoxNTczMDQ4Mzk1fQ.ZCzGn2hnB_mPFj7_WkVA3WJMKuUDTgQwNZbTNrijMcA');
    const wrapper = renderDislike();
    const dislikeButton = wrapper.find('.dislikeButton').last();
    dislikeButton.simulate('click');
    expect(wrapper).toHaveLength(1);
  });
  it('should should render without crashing', () => {
    const wrapper = renderDislike();
    wrapper.setState({ disliked: true });
    const dislikeButton = wrapper.find('.dislikeButton').first();
    dislikeButton.simulate('click');
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate the map state to props method', () => {
    const wrapper = mount(<Router><Provider store={store}><DislikeObject /></Provider></Router>);
    expect(wrapper).toHaveLength(1);
  });
});
