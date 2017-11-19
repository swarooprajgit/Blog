import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent implements OnInit {

  filteredPosts: Object[];
  posts: Object[];

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    // this.filteredPosts = this.listFilter ? this.performFilter(this.listFilter) : this.posts;
  }

  constructor(private _restcall: RestService) { }
  // performFilter(filterBy: string): IPost[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.posts.filter((post: IPost) =>
  //     post.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  // }
  ngOnInit() {
    this._restcall.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.filteredPosts = this.posts;
      console.log(this.posts);
    });
  }
  delete_post(deleteblog) {
    this._restcall.deleteBlog(deleteblog).subscribe();
    location.replace('http://localhost:4200/posts');
    // this.route.navigate(['/posts']);
  }
}
