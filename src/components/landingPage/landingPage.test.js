import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import LandingPageComp, { LandingPage } from '.';
import mockedArticlesArray from '../../__mocks__/mockedArticlesArray';
import mockedStore from '../../__mocks__/store';
import { fetchSuccessfully } from '../../__mocks__/window';

const renderComponent = (args) => {
  const defaultProps = {
    displayArticles: jest.fn(
      () => new Promise((resolve) => {
        const res = {
          payload: {
            status: 200,
          },
        };
        return resolve(res);
      }),
    ),
    displayPopularArticles: jest.fn(
      () => new Promise((resolve) => {
        const res = {
          payload: {
            data: {},
          },
        };
        return resolve(res);
      }),
    ),
  };
  const props = { ...defaultProps, ...args };
  window.fetch = fetchSuccessfully;
  const mounted = mount(
    <Provider store={mockedStore}>
      <MemoryRouter>
        <LandingPageComp {...props} />
      </MemoryRouter>
    </Provider>,
  );
  const shallowed = shallow(<LandingPage {...props} />);
  return { mounted, shallowed };
};

describe('LANDING PAGE', () => {
  it('should render the whole page with shollow', () => {
    const { shallowed: wrapper } = renderComponent();
    wrapper.setProps({ data: mockedArticlesArray, popularArticles: mockedArticlesArray });
    const viewmorebuttons = wrapper.find('LandingPageViewMoreArticles');
    viewmorebuttons.forEach((viewmorebutton) => {
      viewmorebutton.simulate('click', {});
    });
    expect(wrapper.length).toEqual(1);
  });

  it('should render the whole page with mount', () => {
    const { mounted: wrapper } = renderComponent();
    expect(wrapper.length).toEqual(1);
  });
});
