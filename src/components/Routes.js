import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './notfound/notFound';
import Privacy from './privacy/privacy';
import Signup from './signup';
import EmailVerification from './emailVerification/emailVerification';
import Welcome from './welcome/welcome';
import Login from './login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/privacy" component={Privacy} />
    <Route exact path="/signup" component={Signup} />
    <Route path="/verify" component={EmailVerification} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
