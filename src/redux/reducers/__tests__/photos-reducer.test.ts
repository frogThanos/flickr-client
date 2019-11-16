import expect from 'expect';
import photosReducer, { defaultState } from '../photos-reducer';
import { photosActions } from '../../actions';

describe('photosReducer', () => {
  it('should return the default state', () => {
    expect(photosReducer(undefined, {})).toEqual(defaultState);
  });
  it('should handle GET_PHOTOS_SUCCESS', () => {
    const page:number = 0;
    const pages:number = 0;
    const photo:[] = [];
    const total:string = '';
    const expectedState = { ...defaultState, page, pages, photo, total };
    expect(photosReducer(defaultState, photosActions.getPhotosSuccess(page, pages, photo, total)))
      .toEqual(expectedState);
  });
});
