import Constants from '../constants';
import { getPhotosSuccessTypes } from './types';
import { GetState, ServiceLocatorInterface } from '../../types';

const getPhotosSuccess = (page: number, pages: number, photo: [], total: string): getPhotosSuccessTypes => ({
  type: Constants.GET_PHOTOS_SUCCESS,
  page,
  pages,
  photo,
  total,
});

const fetchPhotos = () => async (dispatch: any, getState: GetState, { flickrAPIService }: ServiceLocatorInterface) => {
  const { searchText, currentPage, rowsPerPage } = getState().searchReducer;
  if (searchText) {
    const result = await flickrAPIService.search(searchText, currentPage, rowsPerPage);
    const { page, pages, photo, total } = result.photos;
    dispatch(getPhotosSuccess(page, pages, photo, total));
  }
};

export default {
  getPhotosSuccess,
  fetchPhotos,
}
