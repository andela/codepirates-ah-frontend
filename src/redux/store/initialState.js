export default {
  userRegistrationData: { isRegistered: false },
  login: {
    isLoggedIn: false,
  },
  profileReducer: {
    profilePending: false,
    profile: {},
    profileError: null,
    updateProfilePending: false,
    updateProfileSuccess: {},
    updateProfileError: null,
  },
  viewArticle: {
    isArticleViewed: false,
  },
  articles: {
    popular: {},
  },
};
