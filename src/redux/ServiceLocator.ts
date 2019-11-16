import { FlickrAPIService } from '../services';
import { ServiceLocatorInterface } from './types';

const flickrAPIService = new FlickrAPIService();

const serviceLocator: ServiceLocatorInterface = {
  flickrAPIService
};

export default serviceLocator;
