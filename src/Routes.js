import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './pages/notFound';
import App from './components/app';
import Privacy from './pages/privacy';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/privacy" component={Privacy} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
