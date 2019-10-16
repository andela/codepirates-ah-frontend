import signupReducer from './signupReducer';
import user from './user/userReducer';
import ArticleReducer from './articles/article.reducer';
import articles from './landingPage';
import searchReducer from './search/searchReducer';

export default {
  userRegistrationData: signupReducer,
  user,
  createdArticleData: ArticleReducer,
  articles,
  search: searchReducer,
};
