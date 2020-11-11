export interface PhotoModel {
  readonly id:string;
  readonly owner:string;
  readonly secret:string;
  readonly server:string;
  readonly farm:number;
  readonly title:string;
  readonly ispublic:number;
  readonly isfriend:number;
  readonly isfamily:number;
}
