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

const clearPhotos = () => ({
  type: Constants.CLEAR_PHOTOS,
});

const getPhotosIsLoading = () => ({
  type: Constants.GET_PHOTOS_IS_LOADING,
});

const getPhotosHasError = () => ({
  type: Constants.GET_PHOTOS_HAS_ERROR,
});

const fetchPhotos = () => async (dispatch: any, getState: GetState, { flickrAPIService }: ServiceLocatorInterface) => {
  dispatch(getPhotosIsLoading());
  const { searchText, rowsPerPage } = getState().searchReducer;
  const emptyString:string = '';
  if(searchText === emptyString) {
    dispatch(clearPhotos());
  }
  try {
    if (searchText) {
      const result = await flickrAPIService.search(searchText, rowsPerPage);
      const { page, pages, photo, total } = result.photos;
      dispatch(getPhotosSuccess(page, pages, photo, total));
    }
  } catch (error) {
    console.error(error);
    dispatch(getPhotosHasError())
  }
};

const fetchPhotosByPage = (currentPage: number) => async (dispatch: any, getState: GetState, { flickrAPIService }: ServiceLocatorInterface) => {
  dispatch(getPhotosIsLoading());
  const { searchText, rowsPerPage } = getState().searchReducer;
  const emptyString:string = '';
  if(searchText === emptyString) {
    dispatch(clearPhotos());
  }
  try {
    if (searchText) {
      const result = await flickrAPIService.searchByPage(searchText, currentPage, rowsPerPage);
      const { page, pages, photo, total } = result.photos;
      dispatch(getPhotosSuccess(page, pages, photo, total));
    }
  } catch (error) {
    console.error(error);
    dispatch(getPhotosHasError())
  }
};

// eslint-disable-next-line
export default {
  getPhotosSuccess,
  clearPhotos,
  fetchPhotos,
  fetchPhotosByPage,
  getPhotosIsLoading,
  getPhotosHasError,
}
