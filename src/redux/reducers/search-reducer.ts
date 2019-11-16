import { Constants } from '../actions';

export interface searchReducerInterface {
  searchText: string;
  currentPage: number;
  rowsPerPage: number;
  isTyping: boolean;
}

export const defaultState: searchReducerInterface = {
  searchText: '',
  currentPage: 1,
  rowsPerPage: 10,
  isTyping: false,
};

const searchReducer = (state = defaultState, action: any): searchReducerInterface => {
  switch (action.type) {
    case Constants.SET_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.payload,
      }
    }
    case Constants.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      }
    }
    case Constants.SET_ROWS_PER_PAGE: {
      return {
        ...state,
        rowsPerPage: action.payload,
      }
    }
    default:
      return state;
  }
};

export default searchReducer;
