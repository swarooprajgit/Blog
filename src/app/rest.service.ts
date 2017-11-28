import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

const _blogURL = 'http://localhost:3000/posts/';
const header = {headers: new Headers ({'Content-Type': 'application/json'})};

@Injectable()
export class RestService {

  constructor(private _http: Http) {}
  getPosts() {
    return this._http.get(_blogURL).map(res => res.json());
  }
  postData(data) {
    return this._http.post(_blogURL, data).map(res => res.json());
  }
  updateBlog(data) {
    return this._http.patch(_blogURL + data.id, data).map(res => res.json());
  }
  deleteBlog(data) {
    return this._http.delete(_blogURL + data.id).map(res => res.json()) ;
  }
  getpost(id) {
    return this._http.get(_blogURL + id).map(res => res.json());
  }
  getcat(category) {
    // return this._http.get(_blogURL + category).map(res => res.json());
    // return this._http.get(_blogURL).map((blogs) => blogs.find(b => b.category === category));
    return this._http.get(_blogURL).map(res => res.json());
  }
}
