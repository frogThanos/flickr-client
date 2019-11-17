import { Constants } from '../actions';

export interface photosReducerInterface {
  isLoading: boolean;
  page: number;
  pages: number;
  photo: [];
  total: string;
}

export const defaultState: photosReducerInterface = {
  isLoading: false,
  page: 0,
  pages: 0,
  photo: [],
  total: '',
};

const photosReducer = (state = defaultState, action: any): photosReducerInterface => {
  switch (action.type) {
    case Constants.GET_PHOTOS_SUCCESS: {
      return {
        ...state,
        page: action.page,
        pages: action.pages,
        photo: action.photo,
        total: action.total,
        isLoading: false,
      }
    }
    case Constants.CLEAR_PHOTOS: {
      return {
        ...state,
        page: defaultState.page,
        pages: defaultState.pages,
        photo: defaultState.photo,
        total: defaultState.total,
        isLoading: false,
      }
    }
    case Constants.GET_PHOTOS_IS_LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    default:
      return state;
  }
};

export default photosReducer;
