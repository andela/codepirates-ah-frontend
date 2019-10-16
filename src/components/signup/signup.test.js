import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from './index';


describe('Signup Component', () => {
  const componentFunc = (args) => {
    const defaultProps = {
      signupAction: jest.fn(),
    };

    const props = { ...defaultProps, ...args };
    return shallow(<Signup {...props} />);
  };
  let wrapper;
  // our mock signup function to replace the one provided by mapDispatchToProps
  const mockSignUpfn = jest.fn();

  beforeEach(() => {
    // pass the mock function as the signup prop
    wrapper = shallow(<Signup signup={mockSignUpfn} />);
  });
  describe('When the form is submitted', () => {
    it('should call the mock signup function', () => {
      wrapper.find('#signupForm').simulate(
        'submit',
        { preventDefault() {} },
      );
    });
    const testSignUp = (firstname, lastname, email, username, password, status, message) => {
      const signupAction = jest.fn(() => new Promise((resolve) => {
        const res = {
          payload: {
            status,
            message,
          },
        };
        return resolve(res);
      }));
      const compent = componentFunc({ signupAction });
      compent.find('#firstname').simulate('change', {
        target: {
          name: 'firstname',
          value: firstname,
        },
      });
      compent.find('#lastname').simulate('change', {
        target: {
          name: 'lastname',
          value: lastname,
        },
      });
      compent.find('#email').simulate('change', {
        target: {
          name: 'email',
          value: email,
        },
      });
      compent.find('#username').simulate('change', {
        target: {
          name: 'username',
          value: username,
        },
      });
      compent.find('#password').simulate('change', {
        target: {
          name: 'password',
          value: password,
        },
      });
      const formSubmit = compent.find('#signupForm');

      formSubmit.simulate('submit', {
        preventDefault: jest.fn(),
      });
    };
    // test when an empty form is submitted
    testSignUp('', '', '', '', '', '', '', '');
    // should register a user successfully
    testSignUp('Noah', 'kalyesubula', 'n@n.com', 'noahkalye', 'Admin12345', 201, '');
    // should throw error when the firstname is invalid
    testSignUp('Noah k', 'kalyesubula', 'n@n.com', 'noahkalye', 'Admin12345', 400, 'firstname is invalid');
    // should throw error when the lastname is invalid
    testSignUp('Noah', 'kalyesubula z', 'n@n.com', 'noahkalye', 'Admin12345', 400, 'lastname is invalid');
    // should throw error when the email is invalid
    testSignUp('Noah', 'kalyesubula', 'n', 'noahkalye', 'Admin12345', 400, 'email is invalid');
    // should throw error when the username is invalid
    testSignUp('Noah', 'kalyesubula', 'n@n.com', '111', 'Admin12345', 400, 'username is invalid');
    // should throw error when the password is invalid
    testSignUp('Noah', 'kalyesubula', 'n@n.com', 'Noahk', '12345', 400, 'password is invalid');
  });
  it('renders without crashing', () => {
    shallow(<Signup />);
  });
});
