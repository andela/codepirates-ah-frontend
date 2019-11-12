import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './navbar.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Nav, NavDropdown, Navbar, Image, Container,
} from 'react-bootstrap';
import * as profileActions from '../../../redux/actions/profile/fetchProfile';
import Search from '../search/search';
import Logo from '../logo';
import { updateNotificationsStatus, getNotifications } from '../../../redux/actions/notifications/index';


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
     if (!localStorage.getItem('token')) return;
     await this.props.actions.fetchProfile();
     this.intervalId = setInterval(() => this.props.actions.getNotifications(), 1000);
   }

   componentWillReceiveProps(nextProps) {
     const {
       notifications,
     } = this.props;
     if (nextProps.notifications !== notifications && nextProps.notifications.status === 'success') {
       this.setState({ notifications: nextProps.notifications });
     }
   }

   handleNotifications = (id) => {
     this.props.actions.updateNotificationsStatus(id);
   }

   render() {
     const { user } = this.props;
     const { isLoggedIn, profile } = user;
     const { notifications: { data } } = this.state;
     const no_of_unread = (data.length !== 0 ? (data.filter((s) => s.read === false).length) : 0);

     return (
       <>

         <Navbar fixed="top" collapseOnSelect expand="lg" bg="transparent" variant="light" sticky="top">
           <Navbar.Brand>
             <Logo />
           </Navbar.Brand>
           <Container>
             <div style={{ width: '20rem' }}><Search /></div>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse className="justify-content-end">
               {isLoggedIn
                 ? (
                   <>
                     <Nav.Link>
                       <NavDropdown

                         title={(
                           <div>
                             <i className="far fa-bell" />

                             {no_of_unread !== 0 ? <span className="badge badge-danger dropdown-toggle">{no_of_unread}</span> : ''}
                           </div>
                    )}
                         id="collasible-nav-dropdown"
                       >
                         {' '}

                         { data.length !== 0 ? (data.map((notification) => (
                           <p onClick={() => this.handleNotifications(notification.id)}>
                             <NavDropdown.Item style={{ fontSize: '10px' }}>
                               {notification.read === false
                                 ? (<b>{notification.message}</b>) : (notification.message)}
                             </NavDropdown.Item>
                           </p>
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
                        Profile
                       </NavDropdown.Item>
                       <NavDropdown.Item href="/articles/create">
                        New Article
                       </NavDropdown.Item>
                       <NavDropdown.Divider />
                       <NavDropdown.Item
                         onClick={() => {
                         }}
                         href="/bookmarks"
                       >
                        Bookmarks
                       </NavDropdown.Item>
                       <NavDropdown.Item
                         onClick={() => {
                         }}
                         href="/logout"
                       >
                        Logout
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
           </Container>
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
    updateNotificationsStatus: bindActionCreators(updateNotificationsStatus, dispatch),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
