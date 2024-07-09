import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions";

const initialState = {
  content: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        content: [...state.favorites.content, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        content: state.favorites.content.filter(favorites => favorites._id !== action.payload),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
