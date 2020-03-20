import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ARTICLES":
      return {
        ...state,
        articleList: action.payload.articleList
      };
    case "CLEAR_ARTICLES":
      return {
        ...state,
        articleList: []
      }
    default:
      return state;
  }
};
export default rootReducer;
