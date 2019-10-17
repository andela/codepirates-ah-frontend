import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';

describe('Button Component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Footer />);
  });

  it('should render footer', () => {
    shallow(<Footer />);
  });

  it('should find Fragment', () => {
    const fragment = wrapper.find('footer');
    expect(fragment.length).toEqual(1);
  });
  it('should find a hr', () => {
    const hr = wrapper.find('hr');
    expect(hr.length).toEqual(1);
  });

  it('should find div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(1);
  });
  it('should find font awesome icon', () => {
    const FontAwesomeIcon = wrapper.find('FontAwesomeIcon');
    expect(FontAwesomeIcon.length).toEqual(3);
  });
  it('should find a span', () => {
    const span = wrapper.find('span');
    expect(span.length).toEqual(1);
  });
});
