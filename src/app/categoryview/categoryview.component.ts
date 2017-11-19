import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrls: ['./categoryview.component.css']
})
export class CategoryviewComponent implements OnInit {

  category: string;
  catblog: Object[];
  constructor(private _getone: RestService , private _activatedroute: ActivatedRoute , private route: Router) { }

  ngOnInit() {
    this.category = this._activatedroute.snapshot.params['id'];
    console.log(this.category + ' category posts should be displayed.');
    this._getone.getPosts().subscribe(data => {
        this.catblog = data;
    });
  }

}
