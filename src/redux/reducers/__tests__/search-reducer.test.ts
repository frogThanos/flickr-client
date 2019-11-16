import expect from 'expect';
import searchReducer, { defaultState } from '../search-reducer';
import { searchActions } from '../../actions';

describe('searchReducer', () => {
  it('should return the default state', () => {
    expect(searchReducer(undefined, {})).toEqual(defaultState);
  });
  it('should handle SET_SEARCH_TEXT', () => {
    const searchText:string = 'searchText';
    const expectedState = { ...defaultState, searchText };
    expect(searchReducer(defaultState, searchActions.setSearchText(searchText))).toEqual(expectedState);
  });
  it('should handle SET_CURRENT_PAGE', () => {
    const currentPage: number = 1;
    const expectedState = { ...defaultState, currentPage };
    expect(searchReducer(defaultState, searchActions.setCurrentPage(currentPage))).toEqual(expectedState);
  });
  it('should handle SET_ROWS_PER_PAGE', () => {
    const rowsPerPage: number = 10;
    const expectedState = { ...defaultState, rowsPerPage };
    expect(searchReducer(defaultState, searchActions.setRowsPerPage(rowsPerPage))).toEqual(expectedState);
  });
});
