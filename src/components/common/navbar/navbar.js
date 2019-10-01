import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Nav, NavDropdown, Navbar, Image,
} from 'react-bootstrap';
import * as profileActions from '../../../redux/actions/profile/fetchProfile';
import Search from '../search/search';
import Logo from '../logo';


/**
 *
 *
 * @class NavBar
 * @param {object} props
 * @extends {React.Component}
 */

export class NavBar extends Component {
  /**
   * @method componentDidMount
   * @returns {boolean} changed state
   */
  async componentDidMount() {
    if (!localStorage.getItem('token')) return;
    await this.props.actions.fetchProfile();
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
                    <NavDropdown.Item href="bookmarks">
                        my Bookmarks
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
  actions: PropTypes.object.isRequired,
};
export const mapStateToProps = ({ user }) => (
  {
    user,
  }
);
export const mapDispatchToProps = (dispatch) => ({
  actions: {
    fetchProfile: bindActionCreators(profileActions.fetchProfile, dispatch),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
