// Keeping form field data in the Redux store is generally bad practice. This
// is just for learning purposes.

// action creators

export const changeSearch = (text) => ({
  type: 'robots/searchChanged',
  payload: text,
});

const pendRobots = () => ({
  type: 'robots/pending',
});

const fulfillRobots = (users) => ({
  type: 'robots/fulfilled',
  payload: users,
});

const rejectRobots = (err) => ({
  type: 'robots/rejected',
  payload: err,
});

// async action creators (for use with Redux Thunk)

export const requestRobots = () => (dispatch) => {
  dispatch(pendRobots());
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => dispatch(fulfillRobots(users)))
    .catch((err) => dispatch(rejectRobots(err)));
};

// reducers

const initialStateSearch = { searchField: '' };

export const searchReducer = (state = initialStateSearch, action) => {
  if (action.type === 'robots/searchChanged') {
    return { ...state, searchField: action.payload };
  }
  return state;
};

const initialStateRequest = {
  isPending: false,
  robots: [],
  error: '',
};

export const requestRobotsReducer = (state = initialStateRequest, action) => {
  switch (action.type) {
    case 'robots/pending':
      return { ...state, isPending: true };
    case 'robots/fulfilled':
      return { ...state, isPending: false, robots: action.payload };
    case 'robots/rejected':
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};

// selectors

export const selectSearch = (state) => state.searchReducer.searchField;

export const selectRobots = (state) => ({
  robots: state.requestRobotsReducer.robots,
  isPending: state.requestRobotsReducer.isPending,
  error: state.requestRobotsReducer.error,
});
