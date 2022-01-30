export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    }
  },
  phone: any;
  website: any;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}
