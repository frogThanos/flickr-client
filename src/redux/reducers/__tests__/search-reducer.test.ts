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
});
