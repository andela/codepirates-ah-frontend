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
  articles: {
    popular: {},
  },
  // this will contain our initial state object
  createdArticleData: {
    isArticleCreated: false,
  },
  search: {
    searchPending: false,
    searchResults: {},
    searchError: null,
  },
};
