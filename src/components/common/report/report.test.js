import React from 'react';
import { shallow } from 'enzyme';
import Report from './report';

describe('Report test', () => {
  const renderReport = (args) => {
    const defaultProps = {
      reportedArticles: {
        reportedArticles: { myreportedArticles: [] },
      },
    };
    const props = { ...defaultProps, ...args };
    return shallow(<Report {...props} />);
  };

  it('should simulate the map state to props method', () => {
    const wrapper = renderReport();
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate the map state to props method', () => {
    const wrapper = renderReport();
    wrapper.setProps({
      reportedArticles: {
        reportedArticles: { myreportedArticles: [{ id: 1 }] },
      },
    });
    expect(wrapper).toHaveLength(1);
  });
});
