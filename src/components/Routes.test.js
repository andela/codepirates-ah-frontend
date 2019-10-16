import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Routes test with Enzyme', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });
  it('should have the Switch field to have been rendered', () => {
    const Switch = wrapper.find('Switch');
    expect(Switch.length).toEqual(1);
  });
  it('should find render  ', () => {
    const Route = wrapper.find('Route');
    const render = wrapper.find(Route.first().props().render());
    expect(render.length).toEqual(0);
  });
});
