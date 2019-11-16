import { combineReducers } from 'redux';

import searchReducer from './search-reducer';
import photosReducer from './photos-reducer';

const rootReducer = combineReducers({
  searchReducer,
  photosReducer,
});

export default rootReducer;
