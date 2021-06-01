// Keeping form field data in the Redux store is generally bad practice. This
// is just for learning purposes.

// action creator
export const changeSearch = (text) => ({
  type: 'robots/searchChanged',
  payload: text,
});

const initialState = { searchField: '' };

// reducer
export const searchReducer = (state = initialState, action) => {
  if (action.type === 'robots/searchChanged') {
    return { ...state, searchField: action.payload };
  }
  return state;
};

// selector
export const selectSearch = (state) => state.searchField;
