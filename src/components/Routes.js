import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './notfound/notFound';
import Privacy from './privacy/privacy';
import Signup from './signup';
import EmailVerification from './emailVerification/emailVerification';
import Welcome from './welcome/welcome';
import Login from './login';
import Profile from './profile/profile';
import socialButtons from './auth/socialAuth/socialButtons';
import Welcome from './welcome/welcome';
import Login from './login';
import socialButtons from './presentation/SocialButtons/SocialButton';
import verifyAuth from './containeer /auth/socialAuth/verifyAuth';

import Profile from './profile/profile';
import socialButtons from './SocialButtons/SocialButton';
import verifyAuth from './socialAuth/verifyAuth';


const user = localStorage.getItem('token');
const Routes = () => (
  <Switch>
    <Route
      exact
      path="/profile"
      render={(props) => {
        if (!user) return <Redirect to="/login" />;
        return <Profile {...props} />;
      }}
    />
    <Route exact path="/" component={Welcome} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/privacy" component={Privacy} />
    <Route exact path="/signup" component={Signup} />
    <Route path="/verify" component={EmailVerification} />
    <Route exact path="/social" component={socialButtons} />
    <Route exact path="/google/social-login" component={verifyAuth} />
    <Route exact path="/twitter/social-login" component={verifyAuth} />
    <Route exact path="/facebook/social-login" component={verifyAuth} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
