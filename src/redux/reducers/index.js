import signupReducer from './signupReducer';
import user from './user/userReducer';
import ArticleReducer from './articles/article.reducer';

export default {
  userRegistrationData: signupReducer,
  user,
  createdArticleData: ArticleReducer,
};
