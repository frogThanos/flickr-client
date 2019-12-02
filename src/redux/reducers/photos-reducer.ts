import { Constants } from '../actions';
import { Photo, modelTypes } from '../../models'

export interface photosReducerInterface {
  isLoading: boolean;
  hasError: boolean;
  page: number;
  pages: number;
  photo: modelTypes.PhotoModel[];
  total: string;
}

export const defaultState: photosReducerInterface = {
  isLoading: false,
  hasError: false,
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
        photo: action.photo.map((item:modelTypes.PhotoModel) => new Photo(item.id, item.owner, item.secret, item.server, item.farm, item.title, item.ispublic, item.isfriend, item.isfamily)),
        total: action.total,
        isLoading: false,
        hasError: false,
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
        hasError: false,
      }
    }
    case Constants.GET_PHOTOS_IS_LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case Constants.GET_PHOTOS_HAS_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    }
    default:
      return state;
  }
};

export default photosReducer;
