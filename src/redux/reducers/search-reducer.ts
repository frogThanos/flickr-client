import { Constants } from '../actions';

export interface searchReducerInterface {
  searchText: string;
  rowsPerPage: number;
}

export const defaultState: searchReducerInterface = {
  searchText: '',
  rowsPerPage: 25,
};

const searchReducer = (state = defaultState, action: any): searchReducerInterface => {
  switch (action.type) {
    case Constants.SET_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.payload,
      }
    }
    default:
      return state;
  }
};

export default searchReducer;
