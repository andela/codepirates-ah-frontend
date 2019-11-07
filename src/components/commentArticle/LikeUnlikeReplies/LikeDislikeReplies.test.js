import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import LikeDislikeRepliesComponent from '.';
import mockedStore from '../../../__mocks__/store';
import { fetchAllLikesSuccess } from '../../../__mocks__/window';

const renderComponent = (args) => {
  const defaultProps = {
    numberOfReply: 0,
    isTextAreaVisible: '',
    setTextAreaVisible: () => {},
    isThreadAreaVisible: '',
    setThreadAreaVisible: () => {},
    fetchLikes: jest.fn(() => Promise.resolve()),
  };
  const props = { ...defaultProps, ...args };
  window.fetch = fetchAllLikesSuccess;
  const mounted = shallow(
    <Provider store={mockedStore}>
      <MemoryRouter>
        <LikeDislikeRepliesComponent {...props} />
      </MemoryRouter>
    </Provider>,
  );
  return { mounted };
};

const counts = [
  {
    commentId: 5,
    formattedLikeInfo: 'admin, userthree,',
    likesCount: 2,
  },
  {
    commentId: 6,
    formattedLikeInfo: 'admin ',
    likesCount: 1,
  },
];
describe('like comment commponent', () => {
  it('should test LikeDislikeRepliesComponent', () => {
    const { mounted: wrapper } = renderComponent();
    wrapper.setProps({ counts });
    expect(wrapper).toHaveLength(1);
  });
});
