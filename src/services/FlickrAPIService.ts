// @ts-ignore
import Flickr from 'flickr-sdk';

export interface FlickrAPIServiceInterface {
  search: (text: string) => any;
}

class FlickrAPIService implements FlickrAPIServiceInterface {
  private readonly flickr: any;
  constructor() {
    this.flickr = new Flickr(process.env.REACT_APP_API_KEY)
  }

  search(text:string) {
    return this.flickr.photos.search({
      text
    }).then(function (res: any) {
      return res.body;
      console.log('yay!', res.body);
    }).catch(function (err: any) {
      console.error('bonk', err);
    });
  }
}

export default FlickrAPIService;
