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
  // this will contain our initial state object
  createdArticleData: {
    isArticleCreated: false,
  },
};
