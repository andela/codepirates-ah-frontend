import signupReducer from './signupReducer';
import viewArticle from './viewSingleArticle/viewSingleArticleReducer';
import ArticleReducer from './articles/article.reducer';
import articles from './viewSingleArticle/getAllArticles';
import user from './user/userReducer';

export default {
  userRegistrationData: signupReducer,
  viewArticle,
  articles,
  user,
  createdArticleData: ArticleReducer,
};
