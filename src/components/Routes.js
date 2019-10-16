import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './notfound/notFound';
import Privacy from './privacy/privacy';
import Welcome from './welcome/welcome';
import Login from './login';
import Profile from './profile/profile';
import ViewArticle from './article';

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
    <Route exact path="/article" component={ViewArticle} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
