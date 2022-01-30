import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../../login/_model/auth.model";
import {HttpClient} from "@angular/common/http";
import {CommentModel, PostModel} from "../_model/data.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient) {
  }

  getUserDetail(id: any): Observable<UserModel> {
    return this.http.get<UserModel>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getPostList(): Observable<any> {
    return this.http.get<any>(` https://jsonplaceholder.typicode.com/posts`);
  }

  getPostDetail(postId: any): Observable<PostModel> {
    return this.http.get<PostModel>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  getPostCommentList(postId: any): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }
}
