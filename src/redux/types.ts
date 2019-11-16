import { photosReducerInterface } from './reducers/photos-reducer';
import { searchReducerInterface } from './reducers/search-reducer';

import { FlickrAPIServiceInterface } from '../services/FlickrAPIService';

export interface RootStateInterface {
  readonly searchReducer: searchReducerInterface;
  readonly photosReducer: photosReducerInterface;
}

export interface ServiceLocatorInterface {
  readonly flickrAPIService: FlickrAPIServiceInterface;
}

export type GetState = () => RootStateInterface;
