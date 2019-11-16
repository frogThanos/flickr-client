import { Constants } from '../actions';

export interface photosReducerInterface {
  page: number;
  pages: number;
  photo: [];
  total: string;
}

export const defaultState: photosReducerInterface = {
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
      }
    }
    default:
      return state;
  }
};

export default photosReducer;
