import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './notfound/notFound';
import Privacy from './privacy/privacy';
import Signup from './signup';
import EmailVerification from './emailVerification/emailVerification';
import Login from './login';
import Welcome from './welcome/welcome';
import Profile from './profile/profile';
import ViewArticle from './article';
import verifyAuth from './socialAuth/verifyAuth';
import SpecificUserArticles from './articles/allArticles/SpecificUserArticles';
import CreateArticles from './articles/createArticles/createArticles';
import LandingPage from './landingPage';
import Search from './search/search';

import ResetRequest from './passwordreset';
import Feedback from './passwordreset/feedbackContainer';

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
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/welcome" component={Welcome} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/articles/create" component={CreateArticles} />
    <Route exact path="/articles/mine" component={SpecificUserArticles} />
    <Route exact path="/privacy" component={Privacy} />
    <Route exact path="/article/:slug" component={ViewArticle} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/verify" component={EmailVerification} />
    <Route exact path="/google/social-login" component={verifyAuth} />
    <Route exact path="/twitter/social-login" component={verifyAuth} />
    <Route exact path="/facebook/social-login" component={verifyAuth} />
    <Route exact path="/reset" component={ResetRequest} />
    <Route exact path="/response" component={Feedback} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
