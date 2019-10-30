import signupReducer from './signupReducer';
import user from './user/userReducer';
import ArticleReducer from './articles/article.reducer';
import articles from './landingPage';
import searchReducer from './search/searchReducer';
import passwordResetReducer from './passwordreset';

export default {
  userRegistrationData: signupReducer,
  user,
  createdArticleData: ArticleReducer,
  articles,
  search: searchReducer,
  passwordReset: passwordResetReducer,
};
