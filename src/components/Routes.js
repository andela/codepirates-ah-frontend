import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './notfound/notFound';
import Welcome from './welcome/welcome';
import Privacy from './privacy/privacy';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/privacy" component={Privacy} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
