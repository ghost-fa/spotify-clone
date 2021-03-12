export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  // "BQB6JCsSVAYakgcssc0fXBlJCp5JNu0-EvArDKfRFvbuqFBL_Fzryz0TRYiusszPD2j5wZ_tdnsZjf7ZnXBm_FWhSGqBqFxK915hSEm7jDHXv_fjbtW4aRXT7H5rpgbrEPx0g_JHFJFlU31OqEq1h1RFQGVFDsyHJ56UqDYGe6s7se3OhTMrYK5L7uZtkg",
};

const reducer = (state, action) => {
  console.log(action);

  // push the user to dataLayer we despash someting call action have action has type or set or ....
  // Action -> type, [playload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
