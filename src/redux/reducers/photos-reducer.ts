import { Constants } from '../actions';

interface defaultStateInterface {
  page: number;
  pages: number;
  photo: [];
  total: string;
}

export const defaultState: defaultStateInterface = {
  page: 0,
  pages: 0,
  photo: [],
  total: '',
};

const photosReducer = (state = defaultState, action: any): defaultStateInterface => {
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
