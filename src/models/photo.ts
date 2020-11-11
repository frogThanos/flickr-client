import { PhotoModel } from './types';

class Photo implements PhotoModel {
  readonly id:string;
  readonly owner:string;
  readonly secret:string;
  readonly server:string;
  readonly farm:number;
  readonly title:string;
  readonly ispublic:number;
  readonly isfriend:number;
  readonly isfamily:number;

  constructor(id:string, owner:string, secret:string, server:string, farm:number, title:string, ispublic:number, isfriend:number, isfamily:number) {
    this.id = id;
    this.owner = owner;
    this.secret = secret;
    this.server = server;
    this.farm = farm;
    this.title = title;
    this.ispublic = ispublic;
    this.isfriend = isfriend;
    this.isfamily = isfamily;
  }
}

export default Photo;
