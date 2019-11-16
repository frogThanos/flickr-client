import { FlickrAPIService } from '../services';
import { FlickrAPIServiceInterface } from '../services/FlickrAPIService';

const flickrAPIService = new FlickrAPIService();

interface ServiceLocatorInterface {
  readonly flickrAPIService: FlickrAPIServiceInterface;
}

const serviceLocator: ServiceLocatorInterface = {
  flickrAPIService
};

export default serviceLocator;
