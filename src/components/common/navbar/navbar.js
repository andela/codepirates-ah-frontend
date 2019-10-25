import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Nav, NavDropdown, Navbar, Image,
} from 'react-bootstrap';
import Logo from '../logo';


/**
 *
 *
 * @class NavBar
 * @param {object} props
 * @extends {React.Component}
 */

export class NavBar extends Component {
  render() {
    const { user } = this.props;
    const { isLoggedIn, profile } = user;
    return (
      <>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="transparent" variant="light" sticky="top">
          <Navbar.Brand>
            {' '}
            <Logo />
            {' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link>
              <Link to="/articles">Articles</Link>
            </Nav.Link>
            {isLoggedIn
              ? (
                <>

                  <NavDropdown
                    title={(
                      <div xs={6} md={4}>
                        {profile.image ? (<Image src={profile.image} roundedCircle width="40" height="40" />) : (profile.username) }

                      </div>
                        )}
                    id="collasible-nav-dropdown"
                  >
                    {' '}
                    <NavDropdown.Item>
                      <Link to="/profile">
                    profile
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/create-article">
                     new article
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => {
                    }}
                    >
                      <Link to="/">
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
  }
}
NavBar.defaultProps = {
  user: PropTypes.object,
};
NavBar.propTypes = {
  user: PropTypes.object,
};
export const mapStateToProps = ({ user }) => (
  {
    user,
  }
);
export default connect(mapStateToProps)(NavBar);
