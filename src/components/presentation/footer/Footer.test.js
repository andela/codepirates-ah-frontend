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

  it('should find div', () => {
    const button = wrapper.find('div');
    expect(button.length).toEqual(1);
  });
  it('should find a span', () => {
    const button = wrapper.find('span');
    expect(button.length).toEqual(1);
  });
});
