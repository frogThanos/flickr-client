import Constants from '../constants';
import { setSearchTextTypes, setCurrentPageTypes, setRowsPerPageTypes } from './types';

const setSearchText = (searchText: string): setSearchTextTypes => ({
  type: Constants.SET_SEARCH_TEXT,
  payload: searchText
});

const setCurrentPage = (currentPage: number): setCurrentPageTypes => ({
  type: Constants.SET_CURRENT_PAGE,
  payload: currentPage
});

const setRowsPerPage = (rowsPerPage: number): setRowsPerPageTypes => ({
  type: Constants.SET_ROWS_PER_PAGE,
  payload: rowsPerPage
});

export default {
  setSearchText,
  setCurrentPage,
  setRowsPerPage,
}
