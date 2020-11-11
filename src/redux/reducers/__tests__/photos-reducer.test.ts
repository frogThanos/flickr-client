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
    const isLoading:boolean = false;
    const hasError:boolean = false;
    const expectedState = { ...defaultState, page, pages, photo, total, isLoading, hasError };
    expect(photosReducer(defaultState, photosActions.getPhotosSuccess(page, pages, photo, total)))
      .toEqual(expectedState);
  });
  it('should handle CLEAR_PHOTOS', () => {
    const expectedState = { ...defaultState };
    expect(photosReducer(defaultState, photosActions.clearPhotos()))
      .toEqual(expectedState);
  });
  it('should handle GET_PHOTOS_IS_LOADING', () => {
    const isLoading:boolean = true;
    const expectedState = { ...defaultState, isLoading };
    expect(photosReducer(defaultState, photosActions.getPhotosIsLoading()))
      .toEqual(expectedState);
  });
  it('should handle GET_PHOTOS_HAS_ERROR', () => {
    const hasError:boolean = true;
    const expectedState = { ...defaultState, hasError };
    expect(photosReducer(defaultState, photosActions.getPhotosHasError()))
      .toEqual(expectedState);
  });
});
