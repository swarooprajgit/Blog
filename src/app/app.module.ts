import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { PopularComponent } from './popular/popular.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AddpostComponent } from './addpost/addpost.component';
import {RestService} from './rest.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StickyNavModule} from 'ng2-sticky-nav/dist';
import { EditpostComponent } from './editpost/editpost.component';
import { CategoryviewComponent } from './categoryview/categoryview.component';


@NgModule({
  declarations: [
    AppComponent,
    AllpostsComponent,
    PopularComponent,
    PostDetailComponent,
    AddpostComponent,
    EditpostComponent,
    CategoryviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StickyNavModule,
    RouterModule.forRoot([
      {path: 'posts', component: AllpostsComponent},
      {path: 'posts/:id', component: PostDetailComponent},
      {path: 'addblog', component: AddpostComponent},
      {path: 'editblog/:id', component: EditpostComponent},
      {path: 'category/:id', component: CategoryviewComponent},
    ])
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
