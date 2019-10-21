import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './feedback';

describe('Test feedback component', () => {
  it('should test the feedback component', () => {
    shallow(<Feedback message="reset successful" summary="reset success" />);
  });
});
