import signupReducer from './signupReducer';
import login from './login';
import profileReducer from './profile/profileReducer';
import viewArticle from './viewSingleArticle/viewSingleArticleReducer';
import articles from './viewSingleArticle/getAllArticles';

export default {
  userRegistrationData: signupReducer,
  login,
  profileReducer,
  viewArticle,
  articles,
};
