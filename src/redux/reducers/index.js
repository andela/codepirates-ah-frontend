import signupReducer from './signupReducer';
import viewArticle from './viewSingleArticle/viewSingleArticleReducer';
import articleFeedback from './like/likeReducer';
import user from './user/userReducer';
import article from './articles/articleReducer';
import ArticleReducer from './articles/article.reducer';
import bookmark from './bookmark/bookmarkReducer';
import articles from './landingPage';
import searchReducer from './search/searchReducer';
import passwordResetReducer from './passwordreset';
import comments from './commentArticle';
import updateArticleReducer from './updateArticle';
import emailOptInOut from './notifications/emailOptInReducer';
import appOptInOut from './notifications/appOptInReducer';

export default {
  userRegistrationData: signupReducer,
  viewArticle,
  articles,
  user,
  bookmark,
  createdArticleData: ArticleReducer,
  article,
  search: searchReducer,
  passwordReset: passwordResetReducer,
  articleFeedback,
  comments,
  updateArticle: updateArticleReducer,
  emailOptInOut,
  appOptInOut,
};
