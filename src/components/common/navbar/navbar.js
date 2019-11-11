import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './navbar.scss';
import { connect } from 'react-redux';
import {
  Nav, NavDropdown, Navbar, Image,
} from 'react-bootstrap';
import Search from '../search/search';
import Logo from '../logo';
import notifications from '../../../redux/actions/notifications/index';


/**
 *
 *
 * @class NavBar
 * @param {object} props
 * @extends {React.Component}
 */

export class NavBar extends Component {
  componentDidMount() {
    notifications();
  }

  render() {
    const { user } = this.props;
    const { isLoggedIn, profile } = user;
    return (
      <>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="transparent" variant="light" sticky="top">
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <div style={{ width: '20rem' }}><Search /></div>
            <Nav.Link href="/articles">
              Articles
            </Nav.Link>
            <Nav.Link>
              <NavDropdown
                title={(
                  <div>
                    <i className="far fa-bell" />
                    <span className="badge badge-danger dropdown-toggle">4</span>
                  </div>
                    )}
                id="collasible-nav-dropdown"
              >
                {' '}
                <NavDropdown.Item href="/profile">
                        notification 1
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                notification 2
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
            {isLoggedIn
              ? (
                <>

                  <NavDropdown
                    title={(
                      <div xs={6} md={4}>
                        {profile.image ? (<Image src={profile.image} roundedCircle width="40" height="40" />) : (profile.username)}

                      </div>
                    )}
                    id="collasible-nav-dropdown"
                  >
                    {' '}
                    <NavDropdown.Item href="/profile">
                        profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/create-article">
                        new article
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={() => {
                      }}
                      href="/"
                    >
                        logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )
              : (
                <>
                  <Nav.Link href="/login">
                    login
                  </Nav.Link>
                  <Nav.Link className=" btn btn-outline-primary" href="/signup">
                    Get Started
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
  user: {},
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
