import Constants from '../constants';
import { setSearchTextTypes,  } from './types';

const setSearchText = (searchText: string): setSearchTextTypes => ({
  type: Constants.SET_SEARCH_TEXT,
  payload: searchText
});

export default {
  setSearchText,
}
