import React from 'react';
import { mount } from 'enzyme';
import LikeDislikeRepliesComponent from '.';

const renderComponent = (args) => {
  const defaultProps = {
    likes: 0,
    dislikes: 0,
    numberOfReply: 0,
    isTextAreaVisible: '',
    setTextAreaVisible: () => {},
    isThreadAreaVisible: '',
    setThreadAreaVisible: () => {},
  };
  const props = { ...defaultProps, ...args };
  const mounted = mount(<LikeDislikeRepliesComponent {...props} />);
  return { mounted };
};

describe('comment textarea component for comment', () => {
  it('should test CommentTextArea', () => {
    const { mounted: wrapper } = renderComponent();
    wrapper.find('#button1').simulate('click', {});
    wrapper.find('#button2').simulate('click', {});
    expect(wrapper).toHaveLength(1);
  });
});
