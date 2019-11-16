import expect from 'expect';
import { Constants, photosActions } from '../index';

describe('photoActions', () => {
  it('should handle create an action that ...',() => {
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
});
