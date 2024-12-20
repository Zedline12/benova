export interface ICourse {
  _id: string;
  title: string;
  author:{firstName:string,lastName:string};
  thumbnailLink: string;
  videoLink: string;
    price: number;
    oldPrice: number;
  rating: number;
}
