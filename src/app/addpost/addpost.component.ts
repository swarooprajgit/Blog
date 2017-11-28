import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {Blog} from '../blog';
import {post} from 'selenium-webdriver/http';
import {any} from 'codelyzer/util/function';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  id: number;

  constructor(private _restcall: RestService, private _router: Router ) { }

  ngOnInit() {  }

  addblog(title, body, author, img, userrating, category) {
    console.log('entered addblog');
    // this._restcall.getPosts().subscribe(res => this.id = res.length);
    const blogpost = {
      'post': body ,
      'image': img,
      'author': author,
      'title': title,
      'category': category,
      'user_ratings': userrating,
    };
    console.log(blogpost);
    this._restcall.postData(blogpost).subscribe();
    this._router.navigate(['/posts']);
    location.reload();
  }

}
