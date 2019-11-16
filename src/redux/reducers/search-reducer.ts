import { Constants } from '../actions';

export interface searchReducerInterface {
  searchText: string;
  currentPage: number;
  isTyping: boolean;
}

export const defaultState: searchReducerInterface = {
  searchText: '',
  currentPage: 1,
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
    default:
      return state;
  }
};

export default searchReducer;
