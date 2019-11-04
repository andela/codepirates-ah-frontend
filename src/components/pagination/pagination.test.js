import React from 'react';
import { shallow } from 'enzyme';
import Paginate from './pagination';

it('renders without crashing', () => {
  shallow(<Paginate />);
});
