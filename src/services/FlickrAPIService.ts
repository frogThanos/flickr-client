// @ts-ignore
import Flickr from 'flickr-sdk';

export interface FlickrAPIServiceInterface {
  search: (searchText: string, currentPage: number) => any;
}

class FlickrAPIService implements FlickrAPIServiceInterface {
  private readonly flickr: any;
  constructor() {
    this.flickr = new Flickr(process.env.REACT_APP_API_KEY)
  }

   async search(searchText:string, currentPage: number): Promise<any> {
    try {
      const response = await this.flickr.photos.search({
        text: searchText,
        page: currentPage,
      });
      return response.body;
    } catch (error) {
      console.error('error', error);
    }
  }
}

export default FlickrAPIService;
