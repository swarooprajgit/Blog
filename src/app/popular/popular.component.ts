import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  popblog: Object[];
  constructor(private _getone: RestService , private _activatedroute: ActivatedRoute , private route: Router) { }

  ngOnInit() {
    this._getone.getPosts().subscribe(data => {
      this.popblog = data.sort(function (a: any , b: any ) {
        return b.user_ratings - a.user_ratings; } ) ;
    });
    // this.popblog.sort(
    // });
  }
}
