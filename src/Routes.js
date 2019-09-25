import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={AuthenticationLayout} />
    <Route exact path="/signup" component={AuthenticationLayout} />
    <Route path="/users/reset-password" exact component={ResetPassword} />
    <Route path="/forgot-password" exact component={ForgotPassword} />
    <Route path="/@:username" component={Profile} />
    <Route path="/social-auth" exact component={SocialAuth} />
    <Route path="/editor" component={Editor} />
    <Route path="/post=:articleId" component={Article} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
