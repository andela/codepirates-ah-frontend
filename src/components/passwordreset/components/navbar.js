import React from 'react';
import {
  Nav, Navbar,
} from 'react-bootstrap';
import Logo from '../../common/logo';


/**
 *
 *
 * @description NavBar Component
 * @param {object} props
 * @extends {React.Component}
 */

export const NavBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" sticky="top" className="nav">
    <Navbar.Brand>
      {' '}
      <Logo />
      {' '}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav" />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link href="/articles">
Articles
      </Nav.Link>
      <Nav.Link href="/login">
login
      </Nav.Link>
      <Nav.Link href="/signup">
          Get Started
      </Nav.Link>
    </Navbar.Collapse>
  </Navbar>
);
export default NavBar;
