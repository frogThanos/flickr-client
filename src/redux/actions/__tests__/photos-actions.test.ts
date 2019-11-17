import expect from 'expect';
import { Constants, photosActions } from '../index';

describe('photoActions', () => {
  it('should create an action that sets page, pages, photo and total',() => {
    const page:number = 0;
    const pages:number = 0;
    const photo:[] = [];
    const total:string = '';
    const expectedAction = {
      type: Constants.GET_PHOTOS_SUCCESS,
      page,
      pages,
      photo,
      total,
    };
    expect(photosActions.getPhotosSuccess(page, pages, photo, total))
      .toEqual(expectedAction);
  });
  it('should create an action that resets the reducer to its default state', () => {
    const expectedAction = {
      type: Constants.CLEAR_PHOTOS,
    };
    expect(photosActions.clearPhotos()).toEqual(expectedAction)
  });
});
