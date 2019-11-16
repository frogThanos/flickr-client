import expect from 'expect';
import { searchActions, Constants } from '../index';

describe('searchActions', () => {
  it('should create an action that will setSearchText',  () => {
    const searchText: string = 'test';
    const expectedAction = {
      type: Constants.SET_SEARCH_TEXT,
      payload: searchText,
    };
    expect(searchActions.setSearchText(searchText)).toEqual(expectedAction);
  });
  it('should create an action that will setCurrentPage',  () => {
    const currentPage: number = 1;
    const expectedAction = {
      type: Constants.SET_CURRENT_PAGE,
      payload: currentPage,
    };
    expect(searchActions.setCurrentPage(currentPage)).toEqual(expectedAction);
  });
  it('should create an action that will setRowsPerPage',  () => {
    const rowsPerPage: number = 10;
    const expectedAction = {
      type: Constants.SET_ROWS_PER_PAGE,
      payload: rowsPerPage,
    };
    expect(searchActions.setRowsPerPage(rowsPerPage)).toEqual(expectedAction);
  });
});
