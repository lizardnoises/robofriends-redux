import { CHANGE_SEARCHFIELD } from './constants';

const initialState = {
  searchField: '',
};

export const searchRobots = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: state.payload };
    default:
      return state;
  }
};
