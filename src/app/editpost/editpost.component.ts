import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {

  id: number;
  editblog: any;
  constructor(private _getone: RestService , private _activatedroute: ActivatedRoute , private route: Router) { }

  ngOnInit() {
    this.id = +this._activatedroute.snapshot.params['id'];
    this._getone.getpost(this.id).subscribe(data => {
      this.editblog = data;
    });
  }

  edit(title, body, author, img, category) {
    const edits = {
      'id' : this.id,
      'post': body ,
      'image': img,
      'author': author,
      'title': title,
      'category': category,
    };
    console.log(edits);
    this._getone.updateBlog(edits).subscribe();
    this.route.navigate(['/posts/' + this.id]);
    location.reload();
  }
}
