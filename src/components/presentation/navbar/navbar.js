import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../../../../public/assets/images/logo.png';


/**
 *
 *
 * @class NavBar
 * @param {object} props
 * @extends {React.Component}
 */

const NavBar = (props) => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Navbar.Brand>
        {' '}
        <Link to="/">
          {' '}
          <img src={logo} alt="logo" />
          {' '}
        </Link>
        {' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link>
          <Link to="/articles">Articles</Link>
        </Nav.Link>
        {props.isLoggedIn
          ? (
            <>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                {' '}
                <img
                  className="thumbnail-image"
                  src={src}
                  alt="user profile"
                />
                <NavDropdown.Item>
                  <Link to="/profile">
                    <i className="fa fa-sign-out" />
                    profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/create-article">
                    <i className="fa fa-sign-out" />
                     new article
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => {
                  localStorage.removeItem('token');
                  props.isLoggedIn = false;
                  window.location.replace('/');
                }}
                >
                  <Link to="/">
                    <i className="fa fa-sign-out" />
                       logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )
          : (
            <>
              <Nav.Link>
                <Link to="/login">login</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className=" btn btn-outline-primary" to="/signup">Get Started</Link>
              </Nav.Link>
            </>
          )}
      </Navbar.Collapse>
    </Navbar>
  </>
);

Navbar.propTypes = {
  isLoggedIn: PropTypes.any.isRequired,
};

export default NavBar;
