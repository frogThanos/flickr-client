import { Constants } from '../actions';

export interface DefaultStateInterface {
  searchText: string;
  isTyping: boolean;
}

export const defaultState: DefaultStateInterface = {
  searchText: '',
  isTyping: false,
};

const searchReducer = (state = defaultState, action: any): DefaultStateInterface => {
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
