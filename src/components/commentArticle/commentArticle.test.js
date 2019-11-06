import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import CommentArticleComponent, { ArticleComments } from '.';
import mockedComments from '../../__mocks__/mockComments';
import mockedStore from '../../__mocks__/store';
import { fetchSuccesUtil } from '../../__mocks__/window';

const renderComponent = (args) => {
  const defaultProps = {
    fetchArticleCommentsAction: jest.fn(
      () => new Promise((resolve) => {
        const res = {
          payload: {
            status: 'success',
          },
        };
        return resolve(res);
      }),
    ),
  };
  const props = { ...defaultProps, ...args };
  window.fetch = fetchSuccesUtil;
  const mounted = mount(
    <Provider store={mockedStore}>
      <MemoryRouter>
        <CommentArticleComponent {...props} />
      </MemoryRouter>
    </Provider>,
  );
  const shallowed = shallow(<ArticleComments {...props} />);
  return { mounted, shallowed };
};

describe('COMMENTNG ARTICLE', () => {
  it('should render the whole page with shollow', () => {
    const { shallowed: wrapper } = renderComponent();
    wrapper.setProps({ data: mockedComments });
    expect(wrapper.length).toEqual(1);
  });

  it('should render the whole page with mount', () => {
    const { mounted: wrapper } = renderComponent();
    wrapper.find('#button3').simulate('click', {});
    expect(wrapper.length).toEqual(1);
  });
  it('should test fetchmore function', () => {
    const { mounted: wrapper } = renderComponent();
    expect(wrapper.length).toEqual(1);
  });
});
