import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  id: number;
  oneblog: any;
  constructor(private _getone: RestService , private _activatedroute: ActivatedRoute , private route: Router) { }

  ngOnInit() {
    this.id = +this._activatedroute.snapshot.params['id'];
    this._getone.getpost(this.id).subscribe(data => {
      this.oneblog = data;
      console.log(this.oneblog);
    });
  }

  deletepost() {
    this._getone.deleteBlog(this.oneblog).subscribe();
    location.replace('http://localhost:4200/posts');
    // this.route.navigate(['/posts']);
  }
}
