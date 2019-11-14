import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import NotFound from './notfound/notFound';
import Privacy from './privacy/privacy';
import Signup from './signup';
import EmailVerification from './emailVerification/emailVerification';
import Login from './login';
import Welcome from './welcome/welcome';
import Logout from './common/logout/logout';
import Profile from './profile/profile';
import ViewArticle from './article';
import verifyAuth from './socialAuth/verifyAuth';
import SpecificUserArticles from './articles/allArticles/SpecificUserArticles';
import CreateArticles from './articles/createArticles/createArticles';
import LandingPage from './landingPage';
import Search from './search/search';
import UpdateArticles from './update';
import bookmarks from './bookmark/bookmark';
import Allfollowers from './followUnfollow/AllfollowersComponent';
import Following from './followUnfollow/following';
import FollowUserComponent from './followUnfollow/followComponent';
import ResetRequest from './passwordreset';
import Feedback from './passwordreset/feedbackContainer';
import ArticleComments from './commentArticle';
import saveUserAction from '../redux/actions/saveUser';
import store from '../redux/store';
import Tags from './tags/tags';

const user = localStorage.getItem('token');
if (user) {
  const decodedUser = jwt_decode(user);
  store.dispatch(saveUserAction(decodedUser));
}

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
    <Route exact path="/following" component={FollowUserComponent} />
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/welcome" component={Welcome} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/login" component={Login} />
    <Route
      exact
      path="/articles/create"
      render={(props) => {
        if (!user) return <Redirect to="/login" />;
        return <CreateArticles {...props} />;
      }}
    />
    <Route exact path="/users/me/following" component={Following} />
    <Route exact path="/users/me/myfollowers" component={Allfollowers} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/articles/tag" component={Tags} />
    <Route exact path="/bookmarks" component={bookmarks} />
    <Route exact path="/articles/create" component={CreateArticles} />
    <Route exact path="/articles/mine" component={SpecificUserArticles} />
    <Route exact path="/privacy" component={Privacy} />
    <Route exact path="/article/:slug" component={ViewArticle} />
    <Route exact path="/signup" component={Signup} />
    <Route path="/article/:slug/update" component={UpdateArticles} />
    <Route path="/verify" component={EmailVerification} />
    <Route exact path="/google/social-login" component={verifyAuth} />
    <Route exact path="/twitter/social-login" component={verifyAuth} />
    <Route exact path="/facebook/social-login" component={verifyAuth} />
    <Route path={/\/reset/} component={ResetRequest} />
    <Route exact path="/response" component={Feedback} />
    <Route
      exact
      path="/comment"
      render={(props) => {
        if (!user) {
          return <Redirect to="/login" />;
        }
        return <ArticleComments {...props} />;
      }}
    />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
