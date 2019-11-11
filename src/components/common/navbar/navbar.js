import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './navbar.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Nav, NavDropdown, Navbar, Image,
} from 'react-bootstrap';
import * as profileActions from '../../../redux/actions/profile/fetchProfile';
import Search from '../search/search';
import Logo from '../logo';
import getNotifications from '../../../redux/actions/notifications/index';


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
   state = {
     notifications: {
       data: [],
       message: '',
       status: '',
     },
   }

   async componentDidMount() {
     await this.props.actions.getNotifications();
     if (!localStorage.getItem('token')) return;
     await this.props.actions.fetchProfile();
   }

   componentWillReceiveProps(nextProps) {
     const {
       notifications,
     } = this.props;
     if (nextProps.notifications !== notifications) {
       this.setState({ notifications: nextProps.notifications });
     }
   }

   render() {
     const { user } = this.props;
     const { notifications: { data } } = this.state;
     const { isLoggedIn, profile } = user;
     console.log('NOTIFICATIONS ----------', data);
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
             {isLoggedIn
               ? (
                 <>
                   <Nav.Link>
                     <NavDropdown

                       title={(
                         <div>
                           <i className="far fa-bell" />

                           <span className="badge badge-danger dropdown-toggle">{data.length !== 0 ? (data.filter((s) => s.read === false).length) : ''}</span>
                         </div>
                    )}
                       id="collasible-nav-dropdown"
                     >
                       {' '}
                       { data.length !== 0 ? (data.map((notification) => (
                         <NavDropdown.Item style={{ fontSize: '10px' }}>
                           {notification.read === false ? (<b>{notification.message}</b>) : (notification.message)}
                         </NavDropdown.Item>
                       ))) : (
                         <NavDropdown.Item>
                        No notifications yet!
                         </NavDropdown.Item>
                       )}
                     </NavDropdown>
                   </Nav.Link>
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
                     <NavDropdown.Item href="/articles/create">
                        new article
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item
                       onClick={() => {
                       }}
                       href="/logout"
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
export const mapStateToProps = ({ user, notifications }) => (
  {
    user,
    notifications,
  }
);
export const mapDispatchToProps = (dispatch) => ({
  actions: {
    fetchProfile: bindActionCreators(profileActions.fetchProfile, dispatch),
    getNotifications: bindActionCreators(getNotifications, dispatch),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
