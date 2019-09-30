import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './notfound/notFound';
import Privacy from './privacy/privacy';
import Welcome from './welcome/welcome';
import Login from './login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/privacy" component={Privacy} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
