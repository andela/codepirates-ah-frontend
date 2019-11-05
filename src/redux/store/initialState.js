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
  article: {
  },
};
