import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './notfound/notFound';
import Privacy from './privacy/privacy';
import Signup from './signup';
import EmailVerification from './emailVerification/emailVerification';
import Welcome from './welcome/welcome';
import Login from './login';
import Profile from './profile/profile';
import verifyAuth from './socialAuth/verifyAuth';

import CreateArticles from './articles/createArticles/createArticles';

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
    <Route exact path="/articles/create" component={CreateArticles} />
    <Route exact path="/privacy" component={Privacy} />
    <Route exact path="/signup" component={Signup} />
    <Route path="/verify" component={EmailVerification} />
    <Route exact path="/google/social-login" component={verifyAuth} />
    <Route exact path="/twitter/social-login" component={verifyAuth} />
    <Route exact path="/facebook/social-login" component={verifyAuth} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
