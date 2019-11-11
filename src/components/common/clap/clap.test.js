import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ClapObject, { Clap } from './clap';
import store from '../../../__mocks__/store';

describe('Clap test', () => {
  const renderClap = (args) => {
    const defaultProps = {
      cancelClaps: jest.fn(),
      clapError: null,
      history: {
        push: jest.fn(),
      },
      clapPending: false,
      claps: 'slugtest',
      slug: 'sss',
      username: 'userfour',
      getClaps: jest.fn(),
      updateClaps: jest.fn(),
    };
    const props = { ...defaultProps, ...args };
    return shallow(<Clap {...props} />);
  };

  it('should clap an article', () => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwidmVyaWZpZWQiOnRydWUsImltYWdlIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vaGFiaW5lemFkYWx2YW4vaW1hZ2UvdXBsb2FkL3YxNTcyOTQyMzQ0L3RtdWlsMWNndnA3ZnBnaGl0a3B5LmpwZyIsImlhdCI6MTU3Mjk2MTk5NSwiZXhwIjoxNTczMDQ4Mzk1fQ.ZCzGn2hnB_mPFj7_WkVA3WJMKuUDTgQwNZbTNrijMcA');
    const wrapper = renderClap();
    expect(wrapper).toHaveLength(1);
  });

  it('should simulate click event to clap', () => {
    window.localStorage.getItem = jest.fn(() => true);
    const wrapper = renderClap();
    const clapButton = wrapper.find('.clapIcon');
    clapButton.simulate('click');
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate click event to clap', () => {
    localStorage.removeItem('token');
    const wrapper = renderClap();
    const clapButton = wrapper.find('.clapIcon');
    clapButton.simulate('click');
    expect(wrapper).toHaveLength(1);
  });

  it('should simulate the map state to props method', () => {
    const wrapper = mount(<Router><Provider store={store}><ClapObject /></Provider></Router>);
    expect(wrapper).toHaveLength(1);
  });
});
