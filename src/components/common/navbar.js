import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 *
 *
 * @class Navbar
 * @extends {React.Component}
 */

const Navbar = (props) => <>
 <Navbar bg="light" expand="lg">
  <Navbar.Brand > <Link to='/' className="navbar--logo">AUTHORS HAVEN</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  {props.hideNavButtons
?<>
<Navbar.Collapse className="justify-content-end">
     
  {props.isLoggedIn
  ? <>
  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
       <NavDropdown.Item ><Link to='/dashboard' className="navbar--logo">my dashboard</Link></NavDropdown.Item>
       <NavDropdown.Item ><Link to='/profile' className="navbar--logo">my profile</Link></NavDropdown.Item>
       <NavDropdown.Item ><Link to='/articles' className="navbar--logo">article</Link></NavDropdown.Item>
       <NavDropdown.Divider />
         <NavDropdown.Item onClick= {() => {localStorage.removeItem('token');window.location.replace('/login');
                  }}><Link to='/login' className="navbar--logo">logout</Link></NavDropdown.Item>
    </NavDropdown>
    </>
  : <>
  <Nav.Link ><Link to='/articles' className="navbar--logo">login</Link></Nav.Link>
     <Nav.Link ><Link to='/articles' className="navbar--logo">get started</Link></Nav.Link> 
     
     </>
    }
  </Navbar.Collapse>
  </>
: }
</Navbar>
</>;

Navbar.propTypes = {
  isLoggedIn: PropTypes.any.isRequired,
  hideNavButtons: PropTypes.any.isRequired,
};

export default Navbar;
