export default {
  userRegistrationData: { isRegistered: false },
  user: {
    isLoggedIn: false,
    profile: {},
    isAuthLOading: false,
    profilePending: false,
    profileError: null,
    updateProfilePending: false,
    updateProfileSuccess: {},
    updateProfileError: null,
  },
  viewArticle: {
    isArticleViewed: false,
    articleRated: false,
    articleDeleted: false,
    sharedOnfacebook: false,
    sharedOntwitter: false,
    sharedOnmail: false,
  },
  bookmark: {
    bookmarkPending: false,
    bookmarkSuccess: '',
    bookmarkError: null,
    myBookmarks: [],
    myBookmarksSuccess: null,
  },
  articles: {
    popular: {},
    isSpecifiUserArticlesViewed: false,
  },
  createdArticleData: {
    isArticleCreated: false,
  },
  search: {
    searchPending: false,
    searchResults: {},
    searchError: null,
  },
  passwordReset: {
    success: {
      subject: '',
      message: '',
    },
    error: '',
  },
  article: {},
  articleFeedback: {
    clapPending: false,
    claps: 0,
    clapError: null,
    dislikePending: false,
    dislikes: 0,
    dislikeError: null,
    article: {
    },
  },
  comments: [],
  updateArticle: {
    success: '',
    error: '',
    editmode: true,
  },
  emailOptInOut: {},
  appOptInOut: {},
};
