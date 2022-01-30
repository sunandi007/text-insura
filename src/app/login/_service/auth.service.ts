import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../_model/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient) {
  }

  static isLogin(): boolean {
    return !!localStorage.getItem('userData');
  }

  static getUsername(): string {
    return this.isLogin()
      ? JSON.parse(localStorage.getItem('userData')!.toString()).username
      : 'Fauzan';
  }

  static getUserID(): string {
    return this.isLogin()
      ? JSON.parse(localStorage.getItem('userData')!.toString()).id
      : '99';
  }

  getUserList(req: {username: string, password: string}): Promise<boolean> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users').toPromise().then(
      users => {
        const index = users.findIndex(user => user.username === req.username);
        if (index === -1) {
          return false;
        }
        const allowed = req.password === req.username;
        if (allowed) {
          localStorage.setItem('userData', JSON.stringify(users[index]));
          return true;
        } else {
          return false;
        }
      }
    );
  }
}
