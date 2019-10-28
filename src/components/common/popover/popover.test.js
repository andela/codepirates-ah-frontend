import React from 'react';
import { shallow } from 'enzyme';
import Popover from './popover';


describe('popover for search', () => {
  it('should render compoment without crashing', () => {
    const items = [{ id: 1, value: 'res1' }, { id: 2, value: 'res2' }];
    const wrapper = shallow(<Popover title="helloworld" items={items} />);
    expect(wrapper).toHaveLength(1);
  });
  it('should render compoment without crashing with title tags', () => {
    const items = [{ id: 1, value: 'res1' }, { id: 2, value: 'res2' }];
    const wrapper = shallow(<Popover title="Tags" items={items} />);
    expect(wrapper).toHaveLength(1);
  });
});
