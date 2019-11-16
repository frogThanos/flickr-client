import Constants from '../constants';
import { getPhotosSuccessTypes } from './types';

const getPhotosSuccess = (page: number, pages: number, photo: [], total: string): getPhotosSuccessTypes => ({
  type: Constants.GET_PHOTOS_SUCCESS,
  page,
  pages,
  photo,
  total,
});

const fetchPhotos = () => async (dispatch: any, getState: any, { flickrAPIService }: any) => {
  const { searchText } = getState().searchReducer;
  console.log('fetchPhotos searchText: ', searchText);
  const result = await flickrAPIService.search(searchText);
  const { page, pages, photo, total } = result.photos;
  console.log('page: ', page);
  console.log('pages: ', pages);
  console.log('photo: ', photo);
  console.log('total: ', total);
  dispatch(getPhotosSuccess(page, pages, photo, total));
};

export default {
  getPhotosSuccess,
  fetchPhotos,
}
