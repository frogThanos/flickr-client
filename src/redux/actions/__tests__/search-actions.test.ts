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
});
