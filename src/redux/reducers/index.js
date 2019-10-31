import signupReducer from './signupReducer';
import viewArticle from './viewSingleArticle/viewSingleArticleReducer';
import ArticleReducer from './articles/article.reducer';
import user from './user/userReducer';
import articles from './landingPage';
import searchReducer from './search/searchReducer';
import passwordResetReducer from './passwordreset';

export default {
  userRegistrationData: signupReducer,
  viewArticle,
  articles,
  user,
  createdArticleData: ArticleReducer,
  search: searchReducer,
  passwordReset: passwordResetReducer,
};
